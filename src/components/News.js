import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mariella Moon",
      title:
        "Apple is reportedly testing high-end Mac PCs powered by its new M2 chips",
      description:
        "Apple is expected to launch a collection of new products at the Worldwide Developers Conference (WWDC) in a few days, and two of them might be new Mac desktop computers. According to Bloomberg's Mark Gurman, the tech giant has been testing a couple of high-en…",
      url: "https://www.engadget.com/apple-is-reportedly-testing-high-end-mac-pcs-powered-by-its-new-m2-chips-094545719.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/TteoRo_6aCKYDdfxmAqJGA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/f7e4f270-eb49-11ed-b73f-fcca75b69aab.cf.jpg",
      publishedAt: "2023-06-01T09:45:45Z",
      content:
        "Apple is expected to launch a collection of new products at the Worldwide Developers Conference (WWDC) in a few days, and two of them might be new Mac desktop computers. According to Bloomberg's Mark… [+1737 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Sarah Fielding",
      title: "No Man's Sky arrives on Mac today",
      description:
        "Hello Games made an exciting announcement at Apple's Worldwide Developer Conference in 2022: No Man's Sky would eventually be making its way to Macs. Now, as we ramp up towards WWDC 2023, the time has come with Mac gamers finally able to play No Man's Sky to …",
      url: "https://www.engadget.com/no-mans-sky-arrives-on-mac-today-130016085.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/RvIox9HV3b0kOOPx6OOcaw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/f2b703f0-0053-11ee-adf5-23b907605888.cf.jpg",
      publishedAt: "2023-06-01T13:00:16Z",
      content:
        "Hello Games made an exciting announcement at Apple's Worldwide Developer Conference in 2022: No Man's Sky would eventually be making its way to Macs. Now, as we ramp up towards WWDC 2023, the time ha… [+1083 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mariella Moon",
      title:
        "Faraday Future's FF 91 electric vehicles will cost as much as $309,000",
      description:
        "Faraday Future has officially launched its long delayedFF 91 electric vehicles, including a limited edition called the Futurist Alliance that carries a pretty hefty price tag of $309,000. As Autoblog notes, that's even more expensive than the $249,000 Lucid A…",
      url: "https://www.engadget.com/faraday-futures-ff-91-electric-vehicles-will-cost-as-much-as-309000-053144006.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/.RmCLHUBNDmcbR8ReAOSzw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/a0f7b260-002d-11ee-bfe4-fdcda36c2284.cf.jpg",
      publishedAt: "2023-06-01T05:31:44Z",
      content:
        "Faraday Future has officially launched its long delayedFF 91 electric vehicles, including a limited edition called the Futurist Alliance that carries a pretty hefty price tag of $309,000. As Autoblog… [+2212 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mat Smith",
      title: "The Morning After: What to expect from Apple’s WWDC 2023",
      description:
        "Apple’s big developer conference kicks off June 5th, and all the signs point to the company’s mixed reality headset making its first appearance. The tech giant has been acquiring headset-friendly startups\r\n for years, and if the rumors are true, Apple’s stand…",
      url: "https://www.engadget.com/the-morning-after-what-to-expect-from-apples-wwdc-2023-111535949.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/w5eokYEru719pqXSfleocA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/989f60f0-ce54-11ed-ae79-580cd063061e.cf.jpg",
      publishedAt: "2023-06-01T11:15:35Z",
      content:
        "Apples big developer conference kicks off June 5th, and all the signs point to the companys mixed reality headset making its first appearance. The tech giant has been acquiring headset-friendly start… [+3804 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello i am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-4">
        <h2>News App - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div key={element.id} className="col-md-4">
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
