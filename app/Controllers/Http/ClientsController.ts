import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'

export default class ClientsController {
  public async index({ view }: HttpContextContract) {
    let clients = await Client.all();

    return view.render('clients/index', { clients })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('clients/create')
  }

  public async store({ request, response }: HttpContextContract) {
    const fields = request.only(['name', 'phone', 'email', 'birthday', 'cep', 'address'])
    const client = await Client.create(fields);

    response.redirect().toRoute('clients.show', { id: client.id })
  }

  public async show({ view, params, response }: HttpContextContract) {
    let client = await Client.find(params.id);

    if (!client) {
      return response.notFound();
    }

    return view.render('clients/show', { client })
  }

  public async edit(context: HttpContextContract) {
    return this.show(context)
  }

  public async update({ params, request, response }: HttpContextContract) {
    let client = await Client.find(params.id);

    if (!client) {
      return response.notFound();
    }

    const fields = request.only(['name', 'phone', 'birthday', 'cep', 'address'])
    console.log(client);
    
    await client.merge(fields).save();

    response.redirect().toRoute('clients.show', { id: client.id })
  }

  public async destroy({ params, response }: HttpContextContract) {
    let client = await Client.find(params.id);

    if (!client) {
      return response.notFound();
    }

    await client.delete();

    response.redirect().toRoute('clients.index', { id: client.id })
  }
}
