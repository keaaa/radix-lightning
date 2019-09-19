import moment from 'moment';

const TimewritingService = () => {
    return {
      fetchDate: fetchDate
    };
  }

const fetchDate = (forDate) => {
    const date = moment(forDate);
    const url = `/api/v1/hours-for-day/${date.year()}/${date.month()+1}/${date.date()}`;
    return fetch(url, {
          method: 'GET',
          withCredentials: true,
          credentials: 'include',
          headers: {
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCIsImtpZCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCJ9.eyJhdWQiOiI2ZTg4YTU5MS0xNmZhLTRiZWQtOTY5Yi0xMzY0YjU1MzA0NDkiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYWE0YTIzNS1iNmUyLTQ4ZDUtOTE5NS03ZmNmMDViNDU5YjAvIiwiaWF0IjoxNTY4ODgwNjA3LCJuYmYiOjE1Njg4ODA2MDcsImV4cCI6MTU2ODg4NDUwNywiYWNyIjoiMSIsImFpbyI6IjQyRmdZRENTTUYxeU82M29ZZW5yMEoxYVdiY2wvOVhQRkZ6a3E3SE00L1V1RlFXWmM0Y0IiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiNzU0ZjQwYmMtZWRkOC00NWI1LTg3Y2EtOTAyMjQyNzEwOTc3IiwiYXBwaWRhY3IiOiIxIiwiZmFtaWx5X25hbWUiOiJBbmRhIiwiZ2l2ZW5fbmFtZSI6IktqZWxsIEVyaWsgUmVlZCIsImlwYWRkciI6Ijc3LjE4LjYyLjEwOSIsIm5hbWUiOiJLamVsbCBFcmlrIFJlZWQgQW5kYSIsIm9pZCI6IjQwM2NkZTdmLWVmNDctNDM0NS1iZjA5LTRmMmZmYzhmYTBlYSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yMjA1MjMzODgtMTA4NTAzMTIxNC03MjUzNDU1NDMtMTUzMDQzMyIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InBZdVdtazJhWjd4bFYtd0ZGdFJrbWVPa3pnNHFkUTNTbHQ5Mzd5bXEzRE0iLCJ0aWQiOiIzYWE0YTIzNS1iNmUyLTQ4ZDUtOTE5NS03ZmNmMDViNDU5YjAiLCJ1bmlxdWVfbmFtZSI6IktFQUFBQGVxdWlub3IuY29tIiwidXBuIjoiS0VBQUFAZXF1aW5vci5jb20iLCJ1dGkiOiI3QVVRWGZmQXVVR3paaXc2OVFFT0FBIiwidmVyIjoiMS4wIn0.kgDKaNgH-x6ovNlWNmda9v6VJ2E9oryLEzSpxFO3uGxs8PnFfeJqCa2pqjgDCzxins7YLM5LU0c1d2ond_szF8wNu7Y0E3mllaMh3DcYU3xuG3F9uv76myq9g-h9exbl1KG70_la861ZxtujdyxHIfdJZZCpchCGRYGYLJRBtg7B3pLAMtxFrNyLfFqIt7y03JyuHBCwYK7Kl1fauT7IamMDli9ku4-u5eO--9aYhlcnqCMfJhZHb44RwUtbAlrTBBE1vhtjh1EZms8hIHyEyS9kE2YXTWLPnY0lm6LgbUcuyxeClkC6u9OTGCH8OtETBIP5h0hKKRlxdNuDH1oZVA',
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json());
}

export default TimewritingService;