import { Box, Stack } from '@mui/material'
import React from 'react'
import {VideoCard,ChannelCard, Loader} from './';

const Videos = ({videos,direction}) => {
    if(!videos?.length) return <Loader /> ;
  return (
    <Stack direction={direction || "row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
        {videos.map((item,index)=>(
            <Box sx={{width: {xs: '100%', sm: '358px', md: '320px'}}} key={index}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos