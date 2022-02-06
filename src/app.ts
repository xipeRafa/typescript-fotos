import express, {Request, Response} from 'express'
export const app = express()

app.get('/', (req:Request, res:Response) => {
      res.send('Hola Tontos')
})

app.listen(3000, ()=> {
      console.log('servidor en puerto 3000')
})