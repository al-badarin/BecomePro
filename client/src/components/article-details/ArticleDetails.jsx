import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as articleService from '../../services/articleService';
import * as likeService from '../../services/likeService';

import AuthContext from '../../contexts/authContext';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import ConfirmationModal from './confirm-modal/ConfirmationModal';

import styles from './ArticleDetails.module.css';

export default function ArticleDetails() {
  const navigate = useNavigate();
  const { userId, isAuthenticated } = useContext(AuthContext);
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [userHasLiked, setUserHasLiked] = useState(false);
  const [userLikeId, setUserLikeId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    articleService
      .getOne(articleId)
      .then((result) => {
        setArticle(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch article details', err);
        setLoading(false);
        navigate('/404');
      });

    likeService
      .getLikes(articleId)
      .then((count) => setLikeCount(count))
      .catch((err) => console.error('Failed to fetch likes', err));

    if (isAuthenticated) {
      likeService
        .userHasLiked(articleId, userId)
        .then((result) => {
          if (result.length > 0) {
            setUserHasLiked(true);
            setUserLikeId(result[0]._id);
          }
        })
        .catch((err) => console.error('Failed to check user like', err));
    }
  }, [articleId, navigate, userId, isAuthenticated]);

  const toggleLikeHandler = async () => {
    if (!isAuthenticated) {
      toast.error('You need to be logged in to like articles.');
      navigate('/login');
      return;
    }

    if (userId === article._ownerId) {
      toast.error('You cannot like your own article.');
      return;
    }

    try {
      if (userHasLiked) {
        await likeService.unlike(userLikeId);
        setUserHasLiked(false);
        setUserLikeId(null);
        setLikeCount((prevCount) => prevCount - 1);
      } else {
        const result = await likeService.like(articleId);
        setUserHasLiked(true);
        setUserLikeId(result._id);
        setLikeCount((prevCount) => prevCount + 1);
      }
    } catch (err) {
      console.error('Failed to toggle like', err);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const confirmDeleteHandler = async () => {
    try {
      await articleService.remove(articleId);
      navigate('/articles');
    } catch (error) {
      console.error('Failed to delete article', error);
      toast.error('Failed to delete article.');
    }
    closeModal();
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.articleDetails}>
      <h1 className={styles.title}>{article.title}</h1>
      <img
        className={styles.image}
        src={article.imageUrl}
        alt={article.title}
      />
      <p className={styles.content}>{article.content}</p>

      {isAuthenticated && userId !== article._ownerId && (
        <div className={styles.likes}>
          <button onClick={toggleLikeHandler} className={styles.likeButton}>
            {userHasLiked ? 'Unlike' : 'Like'}
          </button>
          <span>
            {likeCount} {likeCount === 1 ? 'Like' : 'Likes'}
          </span>
        </div>
      )}

      {userId === article._ownerId && (
        <div className={styles.buttons}>
          <Link to={`/articles/${articleId}/edit`} className={styles.button}>
            Edit
          </Link>

          <button className={styles.button} onClick={openModal}>
            Delete
          </button>
        </div>
      )}

      <ConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onConfirm={confirmDeleteHandler}
        message={`Are you sure you want to delete the article: '${article.title}'`}
      />

      <ToastContainer />
    </div>
  );
}
