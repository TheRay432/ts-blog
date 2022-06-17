import React from "react";

const DoSomething = () => {
  return (
    <>
      <div className="container do_container">
        <h1>不知道要寫什麼嗎?</h1>
        <div className="card">
          <div className="card-item">
            <i className="bi bi-cup-straw"></i>
            <h2>生活上的趣事</h2>
            <p>生活上發生的趣事就可以寫下來喔!</p>
          </div>
          <div className="card-item">
            <i className="bi bi-emoji-frown"></i>
            <h2>傷心的事</h2>
            <p>
              即使在傷心的時候,也可以寫下來,當你之後回頭看的時候,可以回想起當時的你!
            </p>
          </div>
          <div className="card-item">
            <i className="bi bi-card-text"></i>
            <h2>寫寫筆記</h2>
            <p>可以拿來寫筆記,紀錄一下當天學到什麼,或碰到什麼問題</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoSomething;
