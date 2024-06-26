const InputBox = ({ target }) => {
  return (
    <div className="input-container">
      <style>
        {`
            .input-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 35px;
              }
              
              .input {
                width: 50vmax;
                height: 50%;
                outline: none;
                font-size: 14px;
                font-weight: 500;
                background-color: #53535f;
                caret-color: #f7f7f8;
                color: #fff;
                padding: 7px 10px;
                border: 2px solid transparent;
                border-top-left-radius: 7px;
                border-bottom-left-radius: 7px;
                margin-right: 1px;
                transition: all .2s ease;
              }
              
              .input:hover {
                border: 2px solid rgba(255, 255, 255, 0.16);
              }
              
              .input:focus {
                border: 2px solid #a970ff;
                background-color: #0e0e10;
              }
              
              .search__btn {
                border: none;
                cursor: pointer;
                background-color: rgba(42, 42, 45, 1);
                border-top-right-radius: 7px;
                border-bottom-right-radius: 7px;
                height: 100%;
                width: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              
              .search__btn:hover {
                background-color: rgba(54, 54, 56, 1);
              }
            `}
      </style>
      <input type="text" name="text" className="input" placeholder="Search Movies" onChange={target} />
      <button className="search__btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
          <path
            d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
            fill="#efeff1"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default InputBox;
