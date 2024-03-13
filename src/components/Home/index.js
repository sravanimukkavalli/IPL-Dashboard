import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {dashboardList: [], isLoading: true}

  componentDidMount() {
    this.getDashboardData()
  }

  getDashboardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({dashboardList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, dashboardList} = this.state
    return (
      <div className="home-bg-container">
        {isLoading ? (
          // <div testid="loader">
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            <div className="home-icon-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="home-icon"
              />
              <h1 className="home-heading">IPL Dashboard</h1>
            </div>
            <ul className="unordered-dashboard-list-container">
              {dashboardList.map(eachItem => (
                <TeamCard key={eachItem.id} teamDetails={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default Home
