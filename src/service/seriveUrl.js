export class SERVICE_URL {
    static internal_url = process.env.REACT_APP_INTERNAL_URL;
    static external_url = process.env.REACT_APP_EXTERNAL_URL;
  

static fetchData = this.internal_url + '/fetch-existing-loans';
static addData = this.internal_url + '/add-exist-loan';
static Delete = this.internal_url + '/delete-exist-loan';
}