import React, { Component } from 'react';
import '../styles/stories.css';
import { VscAccount, VscChevronRight, VscChevronLeft, VscChromeClose } from "react-icons/vsc";

class Stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAtStart: true,
            isAtEnd: false,
            showVideo: false,
            isPlaying: true,
            thumbnail: null
        };
        this.storiesBlockRef = React.createRef();
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        this.storiesBlockRef.current.addEventListener('scroll', this.handleScroll);
        this.handleScroll(); // Initial check
        document.addEventListener('keydown', this.handleKeyDown);
        this.extractVideoThumbnail();
    }

    componentWillUnmount() {
        this.storiesBlockRef.current.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.showVideo && this.state.showVideo) {
            // Play the video only if it was previously hidden and is now shown
            this.videoRef.current.play().catch(error => {
                console.error('Error playing video:', error);
            });
        }
    }

    extractVideoThumbnail = () => {
        const video = document.createElement('video');
        video.src = '/videos/video.mp4'; // Убедитесь, что путь правильный
        video.crossOrigin = "anonymous"; // Убедитесь, что видео может быть загружено с другого домена
        video.load();
        video.addEventListener('loadeddata', () => {
            // Создать скрытый видео элемент для получения кадра
            video.currentTime = 0; // Установите время видео на начальный кадр
            video.addEventListener('seeked', () => {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const thumbnail = canvas.toDataURL('image/png');
                this.setState({ thumbnail });
            });
        });
    }

    scrollLeft = () => {
        this.storiesBlockRef.current.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    }

    scrollRight = () => {
        this.storiesBlockRef.current.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    }

    handleScroll = () => {
        const scrollLeft = this.storiesBlockRef.current.scrollLeft;
        const scrollWidth = this.storiesBlockRef.current.scrollWidth;
        const clientWidth = this.storiesBlockRef.current.clientWidth;

        this.setState({
            isAtStart: scrollLeft === 0,
            isAtEnd: scrollLeft + clientWidth >= scrollWidth
        });
    }

    handleVideoOpen = () => {
        this.setState({ showVideo: true, isPlaying: true });
    }

    handleVideoClose = () => {
        this.setState({ showVideo: false, isPlaying: false }, () => {
            if (this.videoRef.current) {
                this.videoRef.current.pause();
                this.videoRef.current.currentTime = 0; // Reset video
            }
        });
    }

    handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            this.handleVideoClose();
        }
    }

    togglePlayPause = () => {
        const video = this.videoRef.current;
        if (this.state.isPlaying) {
            video.pause();
        } else {
            video.play().catch(error => {
                console.error('Error playing video:', error);
            });
        }
        this.setState({ isPlaying: !this.state.isPlaying });
    }

    render() {
        const { isAtStart, isAtEnd, showVideo, thumbnail } = this.state;

        return (
            <div className="container">
                <div className="top-div">Истории</div>
                <div className="bottom-div">
                    {!isAtStart && (
                        <button className="scroll-button left" onClick={this.scrollLeft}>
                            <VscChevronLeft className="arrow-icon" />
                        </button>
                    )}
                    <div className='stories-block' ref={this.storiesBlockRef}>
                        {Array(9).fill().map((_, i) => (
                            <a key={i} className='stories_feed_preview_item' onClick={this.handleVideoOpen} style={{ backgroundImage: `url(${thumbnail})` }}>
                                <div className='user-name'>
                                    <VscAccount style={{ fontSize: 32 }} />
                                    <div>Name</div>
                                </div>
                            </a>
                        ))}
                    </div>
                    {!isAtEnd && (
                        <button className="scroll-button right" onClick={this.scrollRight}>
                            <VscChevronRight className="arrow-icon" />
                        </button>
                    )}
                </div>
                {showVideo && (
                    <div className="video-overlay" onClick={this.handleVideoClose}>
                        <div className="video-container" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={this.handleVideoClose}>
                                <VscChromeClose />
                            </button>
                            <video ref={this.videoRef} controls className="video-player" onClick={this.togglePlayPause}>
                                <source src="/videos/video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Stories;