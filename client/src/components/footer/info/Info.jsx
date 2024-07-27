import styles from './Info.module.css';

export default function Info() {
  return (
    <section className={`info_section ${styles.layout_padding2}`}>
      <div className="container">
        <div className="info_items">
          <div className="item ">
            <div className="img-box box-1"></div>
            <div className="detail-box">
              <p>Bulgaria</p>
            </div>
          </div>

          <div className="item ">
            <div className="img-box box-2"></div>
            <div className="detail-box">
              <p>+359 888881476</p>
            </div>
          </div>

          <div className="item ">
            <div className="img-box box-3"></div>
            <div className="detail-box">
              <p>become.pro2024@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
