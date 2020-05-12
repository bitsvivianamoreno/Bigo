class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async get(payment_reference) {
    if(!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    const currentEntity = await this.repository.get(payment_reference);

    if(!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity does not found";
      throw error;
    }

    return currentEntity;
  }

  async getAll() {
    return await this.repository.getAll();
  }

  async update(id, entity) {
    if(!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }

    return await this.repository.update(id, entity);
  }
}

module.exports = BaseService;