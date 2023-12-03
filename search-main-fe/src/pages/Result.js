import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Item from '@/components/search/Item';
import Layout from '@/components/layout/Layout';
import { FaRegFilePdf } from 'react-icons/fa';

const Result = () => {
  const location = useLocation();
  const searchTerm = location?.state?.searchTerm || '';
  const [myData, setData] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      // axios.get(`http://127.0.0.1:5000/search?q=${searchTerm}`)
      axios
        .get(`http://127.0.0.1:5000/search?q=woman`)
        .then((response) => {
          // response.data = list object
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          // setError(error);
          console.log('error');
        });
    }
  }, [searchTerm]);

  return (
    <>
      <dialog id="my_modal_loading_page" className="modal">
        <div className="w-auto h-auto modal-box text-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </dialog>
      <Layout active={1}>
        <div className="mx-8 mt-2">
          <div>
            Keyword: <div className="font-bold inline-block">{searchTerm}</div>
          </div>
          <div>
            Do you mean: <div className="font-bold inline-block">Woman</div>
          </div>
          {/* <div className='font-bold inline-block'>Top hit</div>
          <div className="flex justify-around">
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Three</div>
          </div> */}
        </div>
        <div>
          <ul>
            {myData &&
              myData.map((item, index) => (
                <div className="mb-4" key={index}>
                  <Item category={item.category} filename={item.filename} list={item.highlights} />
                </div>
              ))}
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default Result;
