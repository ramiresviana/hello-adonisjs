import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClientsController {
  public async index({ view }: HttpContextContract) {
    return view.render('clients/index')
  }

  public async create({ view }: HttpContextContract) {
    return view.render('clients/create')
  }

  public async store({}: HttpContextContract) {
    return
  }

  public async show({ view }: HttpContextContract) {
    return view.render('clients/show')
  }

  public async edit(context: HttpContextContract) {
    return this.show(context)
  }

  public async update({}: HttpContextContract) {
    return
  }

  public async destroy({}: HttpContextContract) {
    return
  }
}
