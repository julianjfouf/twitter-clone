import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { db } from "./firebase";
import "./TweetBox.css";
import { collection, addDoc } from "firebase/firestore";
import firebase from "firebase/compat/app"

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: "Steve Jobs",
      username: "officialstevejobs",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      avatar:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEX///8CAgLo1aoAAADs2a3w3LDy3rG0pYTbyaHw8PDu2675+fnn1Knf39+5ubnNvJbNzc2Ge2LTwpuqnH2Kioqzs7Ps7Ozl5eW/r4yhlHbS0tLQv5jGxsb19fXFtZC+vr6dnZ1YUD+ajXFvZlGqqqo6NCZgYGGMgWZ0dHVMRTZ4blhZWVl/f3+RkZE/Oi4NDApHR0cbGRQyLiVJQzUcHyNiWkg9Pj8sLCwjIyN3d3dPT08gIidqamsHCxIiHhNAQUITDwQTDwUtJxpNyEmUAAANI0lEQVR4nO1d2XbaOhQFjiSMMYNxBgiBMiShkAQCDaFNM/Tm/z/qyja2JVsGMwTJLPZDF2kdVdvSmY9EJnPCCSeccMIJJ5xwwgknnHDCCSeccMIJJ5xwwgn7R6fgfSo8ypzHt+H10/t0ATcyJ/JdeIRqptUqtIqZzAJkT2b/KFx3AP6Cg/cFLMqXsme0T7TKbw6zbs/K19t5qwfwi/54Xy7Kntle0Lp5ARgP2jUATUc2SA9mJFdpzAHufsie3s6o0tXrWxpBxIQhyTlAU2igHGVqWF14T7fKOX+HW8vAyKY1gTxyCdYBjCVXopkAHdnT3BqU37yCfVoT91MO96GPcx50YwDv17KnuhWqz9CvkSWrHB7BYElLB6igXABs9OH+QvZ0N0bhDoZNEhAhE9CWq9m29QwH0v5InQfQga86R6MCXU/PDGw9wwORAdzJnvMmuPiEns6xQD1Pz+TIL0/PcMtYgfeS7HknRhlua5gngOfgMTZYPcO8g1wXyrJnnhA/wcSRbUj/bvmpzusZ5i2Y6RDG4gvUI2uEap6eoWI4Ey2hs1MbcCZ7+utxCR9adImQ5fkzOdyN6JlgFfPwUzaBdbiCIRIQ0EeenqFmQ6Bn/Ofq8CCbwmpUoa8LF2fo09aEesanmFd7o17DiIhnPvAYono7dpM6S9yAc9k04lEFM4ZgreZ9QvWVBCnFAVzJJhKHS7Ghs2EIP4qBu9CSTUWMlh//7Yrpi2wuYjx97IdfDjXVjBg7UFsjYYmBB1BY/x8eGiWwVlmBzYBUtIqLfQmhw7ABymXhzkHbH0E7/ujIZhRGrKnfDnj0VzajEM5A4G7vANRWSxKLd9Ddn5pxQAAW6oT81wCwzhfbFLhPB31QQ90U/9gViT0TpAElZOmwKqQ17AXMwq89b9JcrgnZLOV4L7tCVXwDZybTvTM0nIEpR7m14ip489j3Ls3hmTMyHTorMZg6c/nZ86jsm6ERjC0vJL7xJ5EFa9+LqDGDS/PDgzlkwRSmZ7YHqgeDZ2Wp1CI7h7HYabMrvmuoiB9BPXZ0WYVidg1FpYicrtfqVr6Si1W0CBvtvFXXSISj3mcHl2Uy7tjXHHVqkGG6nRcwD1cxliD1ofvARy+8jmTKMJxIIkgjJoZhRBCxBdApFTKty5sFjARiiowuvJYviplC9QGgwj+hsRtEXgaVnUW46IlNZmJl+BUlqP0L0oatOz5FwCoaeZvU7nFiFpGPgHGPs2KXfn00wHTBOtZn3D5HA4bh/aF5BSiyi8hZRBrf8YWykl/FX4LM3/nI4SerrMiQGVlmFMVIIp8NxuPX0KMdl4BnHOgrqIae4ISVsfdvh2IjxH0wkQm7ydrRFw8DlCNG3epZFaTncPcp/MANs4gVxqGRGyS2mHfNVHaR+R559OGWNOeucZiYBok6mwW/0m/n2vxhZYeIV8FUBgFDPIwWOstgwqyhEYLa1E6aAul69kcI7L30Do0rauu8uTDaEt9GTRiNtCy3vE83KeUYHezJF2WyDJ3o3pe8R5/gY+ztUzZGFDNkPBtiCcTr1WfohU4A5UupzVIv/zUx1iYexUAQ8TCaC/wBrLJtCsy4v0upovLemt1uK69iWnZqMXQ6yxcedCDoZjSh+/DF+WVRDdLyNY2naAD6+WZ9JM/kf/YdycPLQIdxTSnryBKxmsgug0ZUSNm3Fp5HAxYNOhCRlh0ueu+cdN1kzTzYhugjbKfP+eIbykeU6fPcU1VLVeoNqEefPQx++G2wrmJgS8CUAN8yWggXNsh4wQ/3GBQG8Bw41UVu5fg1j/98A205M/rFcMAj7r0XF1+5EDTe1J2D5W/yJUOLcQAOzM3FWcDIcZQ5hvbWDXRJCf6LFN+orL4EGaZHto3D2aUwDjRTTc42/cNUY2p24nvORQ+6CS8/HKN39QZDQ9AJVvuAM2fmhfN3qlSYf7E1DRtNGSClTfqBkTsygiyvLO2O0S41Zp/PAF95YZ4KoR41d4sX+kdfY00JleJQSC0nZdr5xzAyBPUnhI18zxxYWqQXM+BYaQzMXj3Ht9s6o+W50aVk26psyEr3pCizj5C+Jp/oPBH+S0KDEPYZTU6bVDH0mnt7THvXuHAY1SVlvV/Z9gvU2B8/uiV6bP4VDaLh5kFQ5dqZN1tBpONoGpj9d/YHciurqP8Sk8tPQLDen90mroxrcoxFxjbk+S1lD1ljsxvX0R55uCfvOObP6dbahWAyTlgbR//kdZ4UNqobhqxC/LEEHnoDJMb5b1/JJVGv1fkCFZmNEiwijVxkdn6XksqSbQAglPnXzUmCXybDZ4kEM5mFqKokhAFmyP2m0cX6XjE8kJrVt5P1CQlSqbPpcA52DVb37bu/JvmkUCFpvxddsBpVNX1GFJMw1OQfonkRHyERUIQ5ac5gFmxVGiSta0olc0n+GoMOJGVYpyHRuD2d+rKHptGiYgjyvJkAl+t32hJ6ZVBHSPvI1px3ohvjtUuILBUul/ibuJXGiRQRJZYnhBjUeKxt7sejz/UT+HacfSXzvbwwHqE+wHAGMHIlUl9BE49VOOZVTdQATbWon/THlUF/ZBnuizFGtRW/JdtUuEjimxKqZoLHEI0O/R+msxW/roCioXidr9OICI2gK8gnOtBWtPk3JfszS9ysc2twZcqlQ3noecjH6CpqMGWTc1CE3spFJA0Yayv0LR7FKVVdVn4mjJuVAYbe9w+qx1EcT2Peza10l22Je2jHrhEagjjjzTyi8cc1PIklPTXE0MadU8sMB/HOCg6hudYjQBVW26Bew/7BVk9K2AoXZ9CtGEYjYjdQL1GIjC1o+KuIGtA3iG6BGqbCw9W73VQQOQeM1smgR9GE4Cz04P0dRmM4U+PETIDS9dVb+Awi9ZwTHtoj07m3mfXRS6bz9Cr7KIkQjx/hTt9u0nOXdDv710r0w11/6uA6Yvu5co2hceAZBjkbPJfbjbgKkcxbk2vns4ADJ6DUYnhxpqjdSBmErkeinNgMaS3PgX9U818GVslIhPHKK1M0mHBiiDjw+7nmHyxCalkJHh2+DqzPEx8tpU62t9yKBBRilPikDe6uvKmFX25Pl1KuqhlCFgu+27s7T8owqGGgD9lNsytRhiaziLo5SZpqzHuKhnSVXsJM5vOLb2hPeC7RALfP0W7MUVgKbbSAzWmgpLlUVHcXmwxUVqQuqtBg+0SSEfQeJD2Vr1Dy0EleUgyDNFQ29gHut71BAjfUu+9DjJdpXOYw5/g1GGNRopukhmCm+H4bx1DPtS2z3++bVuQlUBnsyJ55YlxAV2wHkX2qdDrsdmeRTsZUEbS9t6FQjaJ8r2lvUoyNUBscMVNF0K4q3sZIof+JJzhKGUF7o36tUDcR4l1Q3ZWJovCcbSZ0u+2iaVbdqwRj8QgryjEs9Ip9ciqFDM+p2kySLCWWex4lfGhWfVzblwStLDo5OzQ3X14Ao7zHHUHJPdnTW1WnR7jun+1LH8Pq8m6e23ZsuzPR5sEtNOlj+OCfkuxWRBwR0Ubsef7UWYtMNrgjCH7lQ7420km7DwzBrKq3ssbjgrvbxT4NamDd/YoS6rO1zSnHjz6Tui9HuAgRoJj1zUGj0RuMZhCiZz/QkT3jTVGIcmCQjUB0fF1tlAQsVkL63QKb4mZThln4I3vOm2GxMcN0rWLxfnOCaaJ4eSbSJQkYSru2bDNcvAmVZSKKi/XDy8fV1vyyCtxGkwCXO/Cz92lHee9tugtBxy24U7KTxsfrbgRdjio0d8eg/LwzQYfjRNGURmcXHRPiqOJW3R8/hyL8UUvlFPfKb8lRoebE4tm++S05dmQzc1H4Fn5LjgrUhAsP38XP5fhbsqt6+ec7+bkcFxJNx+X2PvZGHF8l1TRKB+GXdT05CdnU0v2B+C1Jvh3YBbg6KL+s6wIcMKN69XRgfkuODwfiWJXBz+N4AFfu+kUOPZ/jN9+n9EMmvwNwLP+WzG/J8ec36dVzFfjZoBzfvsE+3kwU4WeDcrzfs59zI0l9xoLO53N//mqxo9L6eaAcn/bD8XvC272ActyDPCq3PznsnnksPKnML+vs1Z22allxfjZ2WsYti2QHBrC39W6GuzTws7Ftc+ruJYiDYbuD7VvVqWVhm+9m+5kmgs63KGxIsJMugpv3AFRToUU5wEZ91MX0EdzwSwRTYyc4QPIvnS+nkuAmfWOTtDJMahYfU0rQppgo29hKo5pZIlln3EN6CSY7ehNt7k0TknTGpVcKHSSoi6d6CZP0i6fVFvpY64I/pZ7hmktdd2ueVAHrAv6U6xkbazJTO7aHqoDVuqaU+k2aXXMc9ewICGZXftXeFudA1MOqbXp5DARXOqebH1ZSEiu0aapypPGA33EEU5mAEiD+29irx0FwRYBxBA6Ni9hvn/08GoYx9uJYxDAbe3/B0YhhrL04GjGMTdekqCS6DjE1jOMRQ0pRVGvb+AS9yhDGF+dHxXAiYPjnmBhmRYL4+7gYRgWxdVQERYJ4fWQM/YLw/8IgEdNi3CmxAAAAAElFTkSuQmCC",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="data:image/png;base64,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" />
          <input
            onChange={(event) => setTweetMessage(event.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(event) => setTweetImage(event.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
