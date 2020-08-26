import React from "react";
import "../App.css";

function Main() {
  return (
    <main className="main-component">
      <section>
        <article className="card">
          <header>
            <div className="profile-pic"></div>
            <div className="emoji"></div>
            <h2>Claas:</h2>
          </header>
          <div>
            <p>just writing a placeholder post</p>
          </div>
          <footer>
            <header>
              <button>LikeBtn</button>
              <button>ChatBtn</button>
            </header>
            <div>
              <p>Hello, what a beautiful night at Codebar</p>
              <p>Yep, isn't it!</p>
              <p>Hi, what awesome evening at Codebar</p>
              <form action="">
                <input type="text" name="quickpost" />
                <input type="submit" value="Post" />
              </form>

            </div>
          </footer>
        </article>
      </section>
    </main>
  );
}

export default Main;
