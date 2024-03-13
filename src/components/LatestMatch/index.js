import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    umpires,
    secondInnings,
    manOfTheMatch,
  } = latestMatchDetails
  return (
    <li className="latest-match-container">
      <div className="match-img-container">
        <div className="match-details-container">
          <p className="match-heading">{competingTeam}</p>
          <p className="match-detail">{date}</p>
          <p className="match-detail">{venue}</p>
          <p className="match-detail">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="match-competent-img"
        />
      </div>
      <hr className="separator" />
      <div className="innings-details-container">
        <p className="match-detail">First Innings</p>
        <p className="match-detail-val">{firstInnings}</p>
        <p className="match-detail">Second Innings</p>
        <p className="match-detail-val">{secondInnings}</p>
        <p className="match-detail">Man Of The Match</p>
        <p className="match-detail-val">{manOfTheMatch}</p>
        <p className="match-detail">Umpires</p>
        <p className="match-detail-val">{umpires}</p>
      </div>
    </li>
  )
}
export default LatestMatch
