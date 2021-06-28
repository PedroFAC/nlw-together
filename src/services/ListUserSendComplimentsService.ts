import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const complimentRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentRepositories.find({
      where: {
        user_sender: user_id,
      },
    });

    console.log(user_id);

    console.log(compliments);

    return compliments;
  }
}

export { ListUserSendComplimentsService };
