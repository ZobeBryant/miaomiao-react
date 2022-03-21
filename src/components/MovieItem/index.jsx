import React from 'react';
import './index.css'
import { setWH, actorFilter } from '../Utils'
// 使非路由组件获取路由
import { withRouter } from 'react-router-dom'
const MovieItem = (props) => {
    const { filmId, poster, name, filmType, grade, actors, nation, runtime, history, isNowPlaying } = props
    const [newPoster, setNewPoster] = React.useState('')
    const [newActors, setNewActors] = React.useState('')
    React.useEffect(() => {
        // 修改poster、actors格式
        setNewPoster(setWH(poster, '128.180'))
        setNewActors(actorFilter(actors))
    }, [])

    function handleToDetail(movieId) {
        history.push(`/detail/${movieId}`)
    }
    return (
        <li >
            <div className='pic_show' onClick={() => { handleToDetail(filmId) }}>
                <img src={newPoster} />
            </div>
            <div className="info_list">
                <div onClick={() => { handleToDetail(filmId) }}>
                    <h2>
                        {name}
                        <span className="item" >{filmType.name}</span>
                    </h2>
                </div>
                {
                    isNowPlaying ?<p>观众评<span className="grade">{grade}</span></p> : null
                }
                
                <p >{newActors ? `主演：${newActors}` : '暂无主演'}</p>
                <p>{nation}|{runtime}分钟</p>
            </div>
            {
                isNowPlaying ? <div className="btn_mall">购票</div> : <div className="btn_pre">预售</div>
            }

        </li>
    );

}


export default withRouter(MovieItem)
