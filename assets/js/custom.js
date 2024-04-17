console.log("custom.js");
$("#comments-btn").on("click", function (event) {
  let value = $("#comments-textarea").get()[0].value.trim();

  if (value !== "") {
    let newComment = `<div class="comments" id="comment1" style="display: block">
                <div class="profile">
                </div>
                <div class="comment-content">
                  <p class="name">
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit"
                        >Anónimo</font
                      >
                    </font>
                  </p>
                  <p>
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit"
                        >${value}</font
                      >
                    </font>
                  </p>
                </div>
                <div class="clr"></div>
                <div class="comment-status">
                  <span>
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit">Curte·comente</font>
                    </font>
                    <img
                      src="./assets/images/like.webp"
                      width="15px"
                      height="15px"
                    />
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit">0</font>
                    </font>
                  </span>
                  <small>
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit">·</font>
                    </font>
                    <u>
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit"
                          >0 minutos antes</font
                        >
                      </font>
                    </u>
                  </small>
                </div>
              </div>`;

    $(newComment).insertAfter(".comments_form");

    $("#comments-textarea").get()[0].value = "";
  }
});
