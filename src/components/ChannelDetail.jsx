import React, { useEffect, useState } from 'react'
import {Videos, ChannelCard} from './'
import { fetchFromApi } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

const ChannelDetail = () => {
  const [channelDetail,setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();


  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=> setChannelDetail(data?.items[0]));
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items));
  },[id])
  return (
    <Box minHeight={"95vh"}>
      <Box>
      <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail