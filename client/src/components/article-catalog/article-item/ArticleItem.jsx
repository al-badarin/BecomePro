import { Link } from 'react-router-dom';

export default function ArticleItem() {
  return (
    <section className="heathy_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="detail-box">
              <h2>ARTICLE'S TITLE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillumLorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum
              </p>
              <div className="btn-box">
                <Link to="">READ MORE</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
