const express=require('express')
const app=express()
const cors=require('cors')
const parser=require('body-parser')
const Database=require('./config/connection/Connection')
require('dotenv').config()

const PORT=process.env.PORT
app.listen(PORT,connectionMsg(PORT))
function connectionMsg(PORT){ 
    console.log(`Connected to the port ${PORT}`); 
    Database() 
}

app.use(cors())
app.use(parser.json())
app.use('/',require('./Api/middleware/Home/Home'))
app.use('/admin',require('./Api/middleware/musicsData/music_data'))
app.use('/admin/music_data',require('./Api/routes/musicApi/getMusicData'))
app.use('/admin/song_search',require('./Api/routes/songSearch/song_search'))
app.use('/admin/user',require('./Api/routes/users/store_user_data'))
app.use('/admin/user_search',require('./Api/routes/users/search_user'))
app.use('/admin/update_user',require('./Api/routes/users/user_data_update'))

