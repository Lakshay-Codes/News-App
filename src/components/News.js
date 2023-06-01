import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className="container my-4">
        <h2>News App - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="my title" description="my desc" imageUrl="https://images.bild.de/64775f3a201bb848421a0515/89eb4ed60d39e1cd55186e5a10356857,54184a86?w=1280" />
          </div>
          <div className="col-md-4">
            <NewsItem title="my title" description="my desc" imageUrl="https://images.bild.de/64775f3a201bb848421a0515/89eb4ed60d39e1cd55186e5a10356857,54184a86?w=1280" />
          </div>
          <div className="col-md-4">
            <NewsItem title="my title" description="my desc" imageUrl="https://images.bild.de/64775f3a201bb848421a0515/89eb4ed60d39e1cd55186e5a10356857,54184a86?w=1280" />
          </div>
        </div>
      </div>
    )
  }
}