class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${this.key}`,
        this.getRequestOptions
      );
      const result_1 = await response.json();
      return result_1.items;
    } catch (error) {
      return console.log('error', error);
    }
  }
  // mostPopular() {
  //   return fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${this.key}`,
  //     this.getRequestOptions
  //   )
  //     .then(response => response.json())
  //     .then(result => result.items)
  //     .catch(error => console.log('error', error));
  // }

  async search(query) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
        this.getRequestOptions
      );
      const result_1 = await response.json();
      return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
    } catch (error) {
      return console.log('error', error);
    }
  }
  // search(query) {
  //   return fetch(
  //     `https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
  //     this.getRequestOptions
  //   )
  //     .then(response => response.json())
  //     .then(result =>
  //       result.items.map(item => ({ ...item, id: item.id.videoId }))
  //     )
  //     .catch(error => console.log('error', error));
  // }
}
export default YoutubeFetch;
