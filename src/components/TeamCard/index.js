import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImageUrl, id} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="each-dashboard-item-container">
        <img src={teamImageUrl} alt={`${name}`} className="dashboard-img" />
        <p className="dashboard-item">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
