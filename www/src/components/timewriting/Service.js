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
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCIsImtpZCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCJ9.eyJhdWQiOiI2ZTg4YTU5MS0xNmZhLTRiZWQtOTY5Yi0xMzY0YjU1MzA0NDkiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYWE0YTIzNS1iNmUyLTQ4ZDUtOTE5NS03ZmNmMDViNDU5YjAvIiwiaWF0IjoxNTY4ODg0MzUyLCJuYmYiOjE1Njg4ODQzNTIsImV4cCI6MTU2ODg4ODI1MiwiYWNyIjoiMSIsImFpbyI6IjQyRmdZSmpWczJpdTF0NU5UTjFpMXprZGMwK1YzVmxrMmNKVUtMZnhSLzZoYWI2Vms1SUIiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiNzU0ZjQwYmMtZWRkOC00NWI1LTg3Y2EtOTAyMjQyNzEwOTc3IiwiYXBwaWRhY3IiOiIxIiwiZmFtaWx5X25hbWUiOiJBbmRhIiwiZ2l2ZW5fbmFtZSI6IktqZWxsIEVyaWsgUmVlZCIsImlwYWRkciI6Ijc3LjE4LjYyLjEwOSIsIm5hbWUiOiJLamVsbCBFcmlrIFJlZWQgQW5kYSIsIm9pZCI6IjQwM2NkZTdmLWVmNDctNDM0NS1iZjA5LTRmMmZmYzhmYTBlYSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yMjA1MjMzODgtMTA4NTAzMTIxNC03MjUzNDU1NDMtMTUzMDQzMyIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InBZdVdtazJhWjd4bFYtd0ZGdFJrbWVPa3pnNHFkUTNTbHQ5Mzd5bXEzRE0iLCJ0aWQiOiIzYWE0YTIzNS1iNmUyLTQ4ZDUtOTE5NS03ZmNmMDViNDU5YjAiLCJ1bmlxdWVfbmFtZSI6IktFQUFBQGVxdWlub3IuY29tIiwidXBuIjoiS0VBQUFAZXF1aW5vci5jb20iLCJ1dGkiOiJGeVJfWWZRRF9VV0V0ZzdiUWxBUEFBIiwidmVyIjoiMS4wIn0.zsFluJ89uwtdvgAF3k8Cx_ckfzxGIZCHyS2PoPYAQUOflpubbQnGXuhPXgvT_dC-uFpbxI-FciuaA6aRWD6F3ZnutFcXEw7c4-8G5Zjd89W7NRlMgSMfbHWbHwQxnUD7rCaZZf64FIS2tzLy93slq43kq_P0_WerFCI2VQF58EGiMd7mhEXDyoY6_l-8x6N_O--dmi1RiZlCd-R6zQCtWRx_iKgTpkF1wImHKh_NwOQutrA6o147G3V-Z8azmFEL9hkZrsiwvsJ7Zvz5-a_MG2cBCos-oPS7MgTUgbqPkdwLNXCmKtX5jX4eTM8EMI-d6lR-CYEhELXURG_RDXYpUg',
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json());
}

export default TimewritingService;