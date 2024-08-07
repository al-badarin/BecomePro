import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import ArticleDetails from './ArticleDetails';
import { likeService, articleService } from '../../services';

jest.mock('../../services/likeService');
jest.mock('../../services/articleService');

const mockArticle = {
  _id: '1',
  title: 'Test Article',
  content: 'This is a test article.',
  imageUrl: '/test.jpg',
  _ownerId: 'owner123',
};

const mockUser = {
  id: 'user123',
  isAuthenticated: true,
};

const renderComponent = (article = mockArticle, user = mockUser) => {
  return render(
    <AuthContext.Provider value={{ user }}>
      <Router>
        <ArticleDetails articleId={article._id} />
      </Router>
    </AuthContext.Provider>
  );
};

describe('ArticleDetails Component', () => {
  beforeEach(() => {
    articleService.get = jest.fn().mockResolvedValue(mockArticle);
    likeService.like = jest.fn().mockResolvedValue({ _id: 'like123' });
    likeService.unlike = jest.fn().mockResolvedValue({});
  });

  test('renders article details', async () => {
    renderComponent();

    expect(await screen.findByText('Test Article')).toBeInTheDocument();
    expect(screen.getByText('This is a test article.')).toBeInTheDocument();
  });

  test('allows authenticated users to like the article', async () => {
    renderComponent();

    const likeButton = await screen.findByRole('button', { name: /like/i });
    fireEvent.click(likeButton);

    expect(likeService.like).toHaveBeenCalledWith('1');
    expect(await screen.findByText(/1 likes/i)).toBeInTheDocument();
  });

  test('prevents users from liking their own article', async () => {
    const ownerUser = { ...mockUser, id: 'owner123' };
    renderComponent(mockArticle, ownerUser);

    const likeButton = await screen.findByRole('button', { name: /like/i });
    fireEvent.click(likeButton);

    expect(likeService.like).not.toHaveBeenCalled();
    expect(
      screen.getByText(/you cannot like your own article/i)
    ).toBeInTheDocument();
  });

  test('shows loading spinner while fetching article details', () => {
    renderComponent();

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
