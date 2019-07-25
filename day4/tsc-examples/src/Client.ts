import Fetch from "./Gateway";
import User from "./User";

const fetchAPI = new Fetch<User>("https://jsonplaceholder.typicode.com/users")

let users = fetchAPI.get();
    users
      .filter(user => user.id > 10)
      .map(user => user.name)
      .forEach(name => console.log(`Fetched ${name} from the get API..`))

