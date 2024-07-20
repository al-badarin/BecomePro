import { Link } from 'react-router-dom';

export default function Info() {
  // TODO: add paths to LINKS

  return (
    <section className="info_section layout_padding2">
      <div className="container">
        <div className="info_items">
          <Link to="">
            <div className="item ">
              <div className="img-box box-1">
                <img src="" alt="" />
              </div>
              <div className="detail-box">
                <p>Bulgaria</p>
              </div>
            </div>
          </Link>

          <Link to="">
            <div className="item ">
              <div className="img-box box-2">
                <img src="" alt="" />
              </div>
              <div className="detail-box">
                <p>+359 888881476</p>
              </div>
            </div>
          </Link>

          <Link to="">
            <div className="item ">
              <div className="img-box box-3">
                <img src="" alt="" />
              </div>
              <div className="detail-box">
                <p>become.pro2024@gmail.com</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
