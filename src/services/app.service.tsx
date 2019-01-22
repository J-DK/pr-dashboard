export class AppService {
  public static async fetchPosts() {
    return await fetch('http://localhost:3001/posts')
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => {
      throw Error(error.statusText)
    });
  }
}