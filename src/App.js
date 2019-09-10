import React from 'react'
import { connect } from 'react-redux'

import Header from './components/Header'
import Headline from './components/Headline/Headline'
import Button from './components/Button/Button'
import ListItem from './components/ListItem/ListItem'
import { CONSTANTS } from './utils'
import { fetchPosts } from './actions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.fetch = this.fetch.bind(this)
  }

  fetch() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props
    const buttonConfig = {
      text: 'get posts',
      onClickFn: this.fetch
    }

    return (
      <div>
        <Header />
        <section className='main'>
          <Headline header='Posts' desc='Click the button to load the posts!' />
          <Button {...buttonConfig} />
          {posts.length > 0 &&
            posts.map((post, index) => {
              const { title, body } = post
              const listItemConfig = {
                title,
                desc: body
              }
              return <ListItem key={index} {...listItemConfig} />
            })}
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({ posts: state.posts })

const mapDispatchToProps = { fetchPosts }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
