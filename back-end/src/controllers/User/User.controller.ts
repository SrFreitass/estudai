import { FastifyReply, FastifyRequest } from 'fastify'
import { GetUsersStatisticsUseCase } from '../../use-cases/User/getUserStatistics.usecase'
import { UserRepository } from '../../repositories/User/User.repository'
import { AnswersRepository } from '../../repositories/Answers/Answers.repository'
import { errorHandling } from '../../utils/error/error.function'

class UserController {
  async getUsersStatistics(req: FastifyRequest, reply: FastifyReply) {
    try {
      const userId = req.headers.userId as string
      const useCase = new GetUsersStatisticsUseCase(
        new UserRepository(),
        new AnswersRepository(),
      )
      const output = await useCase.execute(userId)
      reply.send({
        message: 'OK',
        data: output,
      })
    } catch (error) {
      errorHandling(error, reply)
    }
  }
}

export default new UserController()
