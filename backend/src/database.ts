import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('mysql://root:190982@localhost:3306/nomedobancodedados')

export default sequelize