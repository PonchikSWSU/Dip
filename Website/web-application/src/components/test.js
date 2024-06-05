import React from 'react';
import './test.css';

const stories = [
    {
        bgImage: 'https://sun1-83.userapi.com/s/v1/ig2/GVhEPmyUeQ4uO8l5DGzONrp93wyPb81b_OSip59y-4xcGmnOd9Nj3LHjALTMhpft7yqptWwWh5jH3KSVwJzlbTjy.jpg?size=200x200&quality=96&crop=0,127,719,719&ava=1',
        authorImage: '',
        authorName: 'История',
    },
    {
        bgImage: 'https://sun1-85.userapi.com/s/v1/ig2/c8tl4zuJzi0K5tPLR6rIhWH8ZBJ3BSiyedXjDsJyhlKK4wT4f1pqQIk-d-LgmCMcg0HxvldNmz4Mocjnky92gREt.jpg?size=144x256&quality=95&type=story',
        authorImage: 'https://sun1-87.userapi.com/s/v1/if1/wOlEh_UC4UBp4rcTcNEKjHO8KMxqsI2oK-sxTsdJqBZYS3b4xzJmaA35fZa_b_1apoVoB73w.jpg?size=50x50&quality=96&crop=124,141,665,665&ava=1',
        authorName: 'На Случай Важных Переговоров',
    },
    {
        bgImage: 'https://sun1-88.userapi.com/s/v1/ig2/b3GviOLy51P3_YKFemDM3JtQm5zIVSYUck14K5Ku53avPhK8O92ggl2sZwzZ8Yfnzy-8zEZjaMykfZp5o6yyYXOY.jpg?size=144x256&quality=95&type=story',
        authorImage: 'https://sun1-24.userapi.com/s/v1/ig2/PPwN7K-LtF_WfRjbAjbG8CKbtSw76Z6D9Sfq3-nwEqLcJps2vIDv_pg8V8cpzKi4kfXUrtgpzBGxfm9AdR4a-iph.jpg?size=50x50&quality=95&crop=1,19,1540,1540&ava=1',
        authorName: 'Просто.Вкусно || Роллы и Пицца в Курске',
    },
    {
        bgImage: 'https://i.mycdn.me/getVideoPreview?id=6443390011910&idx=0&type=39&tkn=QSteWPi8ZmSqbZadA8_jP4WfKOk&fn=vid_md',
        authorImage: '',
        authorName: 'Интересное',
    },
    {
        bgImage: 'https://sun1-85.userapi.com/s/v1/ig2/LSCnoXPUwX7pB9p-Dz8FVcQMwYYv9p6w9TdrqVL-N050sdWC9fZHbrcl5Lf33Q4rcc0as_UbHD-61TjIun6eNty9.jpg?size=144x256&quality=95&type=story',
        authorImage: 'https://sun1-18.userapi.com/s/v1/ig2/DWnFhFA_3zYX7KzfPY-lMJnicJZQ5_b59-VsZPJgvrEb91Xh3LVibOwT3bahLw0EjhIsE03M0nUCsK0wcI4LURsH.jpg?size=50x50&quality=95&crop=60,60,486,486&ava=1',
        authorName: 'IGM',
    },
    {
        bgImage: 'https://i.mycdn.me/getVideoPreview?id=6326726625796&idx=0&type=39&tkn=hOFdS2uNvl_X-9scMG0Q2Zkf9Ys&fn=vid_md',
        authorImage: 'https://sun1-97.userapi.com/s/v1/if1/A3gXzBA1U904VDNk8sQq8lm7cGbsHQQ1yFtsWf-Qx-I6hh5mpX2K0DuEvFzRdnTH17TawZkx.jpg?size=50x50&quality=96&crop=87,66,338,338&ava=1',
        authorName: 'СМС приколы',
    },
    {
        bgImage: 'https://i.mycdn.me/getVideoPreview?id=6573863865047&idx=0&type=39&tkn=dXrhz3xQsmD2gt8NVXzkfY1Z-94&fn=vid_md',
        authorImage: 'https://sun1-90.userapi.com/s/v1/ig2/FbCy7JKAStnjCk1YXGJSFwJwPjm3tXt1bh-r8mINMTTVreh8_tWs52NzX0mTdxWj0rV9HIuo_gTH4mrBibwZpBY2.jpg?size=50x50&quality=95&crop=90,246,718,718&ava=1',
        authorName: 'Леонардо Дайвинчик',
    },
];

const StoryBlock = ({ bgImage, authorImage, authorName }) => {
    return (
        <a className="stories_feed_preview_item" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="stories_feed_preview_author">
                <div className="stories_feed_preview_authors_wrapper">
                    <div className="stories_feed_preview_authors_grid">
                        {authorImage && <span className="stories_feed_preview_author_cell" style={{ backgroundImage: `url(${authorImage})` }}></span>}
                    </div>
                </div>
                <div className="stories_feed_preview_author_name">{authorName}</div>
            </div>
        </a>
    );
};

const Test = () => {
    return (
        <div className="page_block stories_feed_wrap clear_fix">
            <div className="stories_feed_cont">
                <div className="stories_feed_title clear_fix">
                    Истории
                    <div className="stories_feed_settings fl_r" onClick={() => alert('Настройки')}>
                        Настройки
                    </div>
                </div>
                <div className="stories_feed_items_wrap">
                    <div className="stories_feed_items_inner">
                        <div className="stories_feed_arrow_left" onClick={() => alert('Prev')}></div>
                        <div className="stories_feed_arrow_right disabled" onClick={() => alert('Next')}></div>
                        <div className="stories_feed_items animated">
                            {stories.map((story, index) => (
                                <StoryBlock key={index} {...story} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
