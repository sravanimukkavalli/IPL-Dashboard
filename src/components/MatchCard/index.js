import './index.css'

const MatchCard = props => {
  const {eachMatchDetails} = props

  const matchStatusClassName =
    eachMatchDetails.matchStatus === 'Won' ? 'match-won' : 'match-loss'

  return (
    <li className="each-recent-match-container">
      <img
        src={eachMatchDetails.competingTeamLogo}
        alt={`competing team ${eachMatchDetails.competingTeam}`}
        className="match-competent-img"
      />
      <p className="match-heading-recent">{eachMatchDetails.competingTeam}</p>
      <p className="match-detail-recent">{eachMatchDetails.result}</p>
      <p className={matchStatusClassName}>{eachMatchDetails.matchStatus}</p>
    </li>
  )
}
export default MatchCard
