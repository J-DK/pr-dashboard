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

  public static async fetchUsers(user: string) {
    return await fetch(`https://api.github.com/search/users?q=${user}`)
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

  public static async fetchUserRepos(user: string) {
    return await fetch(`https://api.github.com/users/${user}/repos`)
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