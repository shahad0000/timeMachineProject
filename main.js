document.addEventListener("DOMContentLoaded", () => {
  let signInLink = document.getElementById("signIn-link");
  let profileLink = document.getElementById("profile");
  const searchBtn = document.querySelector(".searchBtn");
  let seachInput = document.querySelector(".searchInput");

  // Greece comments
  let greeceComments = [
    {
      username: "Pre-existing user",
      time: "today",
      comment: "this is the first comment",
    },
    {
      username: "someone",
      time: "yesterday",
      comment: "this is the second comment",
    },
  ];
  // Greece timeline
  let greeceTimeline = [
    {
      year: 1200,
      title: "Trojan War",
      description:
        "A legendary conflict between the Greeks and Trojans, forming the basis of Homer's *The Iliad*.",
      img: "imgs/trojanWar.png",
    },
    {
      year: 1500,
      title: "Rise of the Olympian Gods",
      description:
        "Zeus and his siblings overthrow the Titans and establish their rule from Mount Olympus.",
      img: "imgs/riseOfOlympians.png",
    },
    {
      year: 1280,
      title: "Birth of Heracles",
      description:
        "Heracles (Hercules), a divine hero and son of Zeus, is born and later performs the famous Twelve Labors.",
      img: "imgs/heracles.png",
    },
    {
      year: 1180,
      title: "Odysseus' Journey",
      description:
        "The Odyssey tells the tale of Odysseus' long journey home after the fall of Troy.",
      img: "imgs/odysseus.png",
    },
  ];
  // Egypt comments
  let egyptComments = [
    {
      username: "Pre-existing user",
      time: "today",
      comment: "this is the first comment",
    },
    {
      username: "someone",
      time: "yesterday",
      comment: "this is the second comment",
    },
  ];
  // Egypt timeline
  egyptTimeline = [
    {
      year: 3000,
      title: "Creation of the World by Atum",
      description:
        "Atum emerges from the primordial waters of Nun and creates the first gods, Shu and Tefnut, beginning the divine lineage.",
      img: "imgs/atum.png",
    },
    {
      year: 2500,
      title: "Osiris Becomes Lord of the Underworld",
      description:
        "After being murdered by Set, Osiris is resurrected by Isis and rules over the afterlife, judging the souls of the dead.",
      img: "imgs/osiris.png",
    },
    {
      year: 2400,
      title: "Horus Defeats Set",
      description:
        "Horus avenges his father Osiris by defeating Set and restoring balance to Egypt, becoming the rightful ruler.",
      img: "imgs/horus.png",
    },
    {
      year: 2300,
      title: "Weighing of the Heart Ritual",
      description:
        "The ceremony to determine a soul’s fate in the afterlife is established—hearts are weighed against the feather of Ma'at.",
      img: "imgs/maat.png",
    },
  ];
  // Norse comments
  let norseComments = [
    {
      username: "Pre-existing user",
      time: "today",
      comment: "this is the first comment",
    },
    {
      username: "someone",
      time: "yesterday",
      comment: "this is the second comment",
    },
  ];
  // Norse timeline
  let norseTimeline = [
    {
      year: 800,
      title: "The Binding of Fenrir",
      description:
        "The gods bind Fenrir, the monstrous wolf, using a magical ribbon called Gleipnir to prevent him from causing chaos until Ragnarok.",
      img: "imgs/fenrir.png",
    },
    {
      year: 900,
      title: "The Death of Baldur",
      description:
        "Baldur, the beloved god, is killed by his blind brother Hodr, manipulated by Loki—signaling the beginning of the end for the gods.",
      img: "imgs/baldur.png",
    },
    {
      year: 1000,
      title: "Loki's Punishment",
      description:
        "Loki is bound by the gods with the entrails of his son and a serpent dripping venom on him for his role in Baldur’s death.",
      img: "imgs/loki.png",
    },
    {
      year: 1200,
      title: "Ragnarok Begins",
      description:
        "The final battle between the gods and giants unfolds—bringing about the death of Odin, Thor, Loki, and the rebirth of the world.",
      img: "imgs/ragnarok.png",
    },
  ];

  // empliment a search feature
  searchBtn.onclick = (e) => {
    e.preventDefault();
    console.log(seachInput.value);
  };

  if (window.location.pathname.includes("index.html")) {
    const greeceMyth = document.getElementById("greece");
    const egyptMyth = document.getElementById("egypt");
    const norseMyth = document.getElementById("norse");

    greeceMyth.onclick = () => {
      const mythologyData = {
        img: "imgs/greeceHeroBg.png",
        name: "Greek Mythology",
        description: "Explore the history of the Greek mythology",
        chosenMyth: greeceTimeline,
        chosenComments: greeceComments,
      };
      localStorage.setItem("mythologyData", JSON.stringify(mythologyData));
      window.location.href = "myths.html";
    };

    norseMyth.onclick = () => {
      const mythologyData = {
        img: "imgs/vikingsHeroBg.png",
        name: "Norse Mythology",
        description: "Explore the history of the Vikings mythology",
        chosenMyth: norseTimeline,
        chosenComments: norseComments,
      };
      localStorage.setItem("mythologyData", JSON.stringify(mythologyData));
      window.location.href = "myths.html";
    };

    egyptMyth.onclick = () => {
      const mythologyData = {
        img: "imgs/egyptHeroBg.png",
        name: "Egyptian Mythology",
        description: "Explore the history of the Egyptian mythology",
        chosenMyth: egyptTimeline,
        chosenComments: egyptComments,
      };
      localStorage.setItem("mythologyData", JSON.stringify(mythologyData));
      window.location.href = "myths.html";
    };
  }

  if (window.location.pathname.includes("myths.html")) {
    const mythologyData = JSON.parse(localStorage.getItem("mythologyData"));
    let addEventBtn = document.getElementById("add-event");
    let addEventMdl = document.getElementById("add-evnt-modal");
    let addComBtn = document.getElementById("add-com-btn");
    let addComPart = document.getElementById("add-com-part");

    // Check if user is logged in the myth page
    if (!localStorage.getItem("loggedIn")) {
      addComPart.style.display = "none";
      addEventMdl.style.display = "none";
    }

    // Render comment
    renderComment = () => {
      let comSection = document.getElementById("comment-section");
      comSection.innerHTML = "";

      mythologyData.chosenComments.forEach((com) => {
        let username = com.username;
        let time = com.time;
        let comment = com.comment;
        let commentBlock = document.createElement("div");
        commentBlock.innerHTML = `<div class="card mb-2">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <h1 class="small mb-0 ms-2">${username}</h1>
                  </div>
                  <div class="d-flex flex-row align-items-center">
                    <p
                
                      class="small text-muted mb-0 text-secondary"
                    >
                      ${time}
                    </p>
                  </div>
                </div>
                <br />
                <p class="text-secondary">
                  ${comment}
                </p>
              </div>
            </div>`;
        comSection.appendChild(commentBlock);
      });
    };
    renderComment();
    addComBtn.onclick = () => {
      let comText = document.getElementById("comm-text");
      mythologyData.chosenComments.push({
        username: localStorage.getItem("username"),
        time: new Date().toLocaleTimeString(),
        comment: comText.value,
      });
      comText.value = "";
      localStorage.setItem("mythologyData", JSON.stringify(mythologyData));
      renderComment();
    };

    // Render timeline
    const renderTimeline = () => {
      if (mythologyData) {
        let mythSection = document.getElementById("myth-sect");
        let mythName = document.getElementById("myth-name");
        let mythDesc = document.getElementById("myth-desc");
        let storyContainer = document.getElementById("story-container");

        mythSection.style.background = `url(${mythologyData.img}) center/cover`;
        mythName.innerText = mythologyData.name;
        mythDesc.innerText = mythologyData.description;
        let mainTimeline = document.createElement("div");
        storyContainer.innerHTML = "";

        mainTimeline.classList.add("main-timeline-2");
        let side = "right";

        mythologyData.chosenMyth
          .sort((a, b) => b.year - a.year)
          .forEach((story) => {
            side = side === "left" ? "right" : "left";
            let storyBlock = document.createElement("div");
            storyBlock.innerHTML = `         
          <div class="timeline-2 ${side}-2">
            <div class="card">
              <img src="${story.img}" class="card-img-top"
                alt="Responsive image">
              <div class="card-body p-4">
                <h4 class="fw-bold mb-4">${story.title}</h4>
                <p class="text-muted mb-4"><i class="far fa-clock" aria-hidden="true"></i> ${story.year} BCE</p>
                <p class="mb-0">
                    ${story.description}
                </p>
              </div>
            </div>
        </div>
        `;
            mainTimeline.append(storyBlock);
          });
        storyContainer.appendChild(mainTimeline);
      }
    };
    renderTimeline();
    addEventBtn.onclick = () => {
      let newPstTitle = document.getElementById("new-post-title");
      let newPstYear = document.getElementById("new-post-year");
      let newPstDesc = document.getElementById("new-post-desc");
      let newPstImg = document.getElementById("new-post-img").files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        let imgUrl = e.target.result;
        mythologyData.greeceTimeline.push({
          year: newPstYear.value,
          title: newPstTitle.value,
          description: newPstDesc.value,
          img: imgUrl,
        });
        localStorage.setItem("mythologyData", JSON.stringify(mythologyData));
        renderTimeline();
      };
      reader.readAsDataURL(newPstImg);
    };
  }

  if (window.location.pathname.includes("signUp.html")) {
    let signUpform = document.getElementById("signUp-form");
    let email = document.getElementById("email");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let alertMsg = document.getElementById("alert-msg");

    signUpform.onsubmit = (e) => {
      e.preventDefault();
      if (username.value.length <= 4 || password.value.length <= 3) {
        alertMsg.classList.remove("d-none");
      } else {
        alertMsg.classList.add("d-none");
        localStorage.setItem("email", email.value);
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      }
    };
  }

  if (window.location.pathname.includes("signIn.html")) {
    let signInform = document.getElementById("signIn-form");
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    signInform.onsubmit = (e) => {
      e.preventDefault();
      if (
        localStorage.getItem("username") === username.value &&
        localStorage.getItem("password") === password.value
      ) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      } else {
        alert("user does not exist");
      }
    };
  }

  if (window.location.pathname.includes("profile.html")) {
    let username = document.getElementById("username-prof-page");
    let email = document.getElementById("prof-email");
    username.innerText = localStorage.getItem("username");
    email.innerText = localStorage.getItem("email");
    // Log user out
    document.getElementById("logout-btn").onclick = () => {
      localStorage.removeItem("loggedIn");
      window.location.href = "index.html";
    };
  }

  if (localStorage.getItem("loggedIn") === "true") {
    if (localStorage.getItem("redirected") !== "true") {
      localStorage.setItem("redirected", "true");
      window.location.href = "index.html";
    }

    if (signInLink) signInLink.style.display = "none";
    profileLink.innerText = localStorage.getItem("username");
  } else {
    profileLink.innerText = "Sign in";
    profileLink.href = "signIn.html";
  }
});
