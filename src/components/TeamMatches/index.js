import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const bgColors = [
  'bg-color1',
  'bg-color2',
  'bg-color3',
  'bg-color4',
  'bg-color5',
  'bg-color6',
  'bg-color7',
  'bg-color8',
  'bg-color9',
  'bg-color10',
]

class TeamMatches extends Component {
  state = {isLoading: true, matchDetails: {}}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }
    this.setState({matchDetails: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, matchDetails} = this.state
    const index = Math.ceil(Math.random() * (bgColors.length - 1))
    const bgColorClassName = bgColors[index]
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchDetails
    return (
      <div>
        {isLoading ? (
          // <div testid="loader">
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className={`match-bg-container ${bgColorClassName}`}>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="main-match-img"
            />
            <h1 className="latest-matches">Latest Matches</h1>

            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="unordered-match-cards-container">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} eachMatchDetails={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches

// <ul className="unordered-match-cards-container">
//               <LatestMatch latestMatchDetails={latestMatchDetails} />
//             </ul>
