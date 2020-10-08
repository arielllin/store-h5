export default class LeagueBoardModel {
  constructor(data, leagueBasicInfo) {
    Object.assign(this, data)
    this.logo = leagueBasicInfo.team_list.find(item => item.team_id === this.team_id).logo
    this.name = leagueBasicInfo.team_list.find(item => item.team_id === this.team_id).short_name
  }
}
