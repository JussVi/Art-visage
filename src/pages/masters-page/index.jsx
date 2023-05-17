import {DATA_Masters} from "../../MOCK_DATAS/DATA_Masters/DATA_Masters";
import master1 from '../../MOCK_DATAS/DATA_Masters/master-1.png'
import './style.css'

const Masters = () => {

  return (
    <div className='container'>
      {
        DATA_Masters.map((item, idx) => {
          return (
            <div key={idx}>
              <div className="masters">
                <img className="image" src={master1} alt="" />
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Masters;