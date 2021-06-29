class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
        regionCode: 'KR',
      },
    });
    return response.data.items;
    // try {
    //   const response = await fetch(
    //     `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${this.key}`,
    //     this.getRequestOptions
    //   );
    //   const result_1 = await response.json();
    //   return result_1.items;
    // } catch (error) {
    //   return console.log('error', error);
    // }
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        q: query,
        type: 'video',
      },
    });
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    // try {
    //   const response = await fetch(
    //     `https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
    //     this.getRequestOptions
    //   );
    //   const result_1 = await response.json();
    //   return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
    // } catch (error) {
    //   return console.log('error', error);
    // }
  }
}
export default Youtube;
