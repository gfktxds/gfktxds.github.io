const ap = new APlayer({
    container: document.getElementById('aplayer01'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    audio: [
        {
            name: '错位时空',
            artist: '艾辰',
            url: 'https://hub.fastgit.xyz/gfktxdspeach/music_storage/raw/main/music/%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA-%E8%89%BE%E8%BE%B0/%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA-%E8%89%BE%E8%BE%B0.mp3',
            cover: 'https://hub.fastgit.xyz/gfktxdspeach/music_storage/raw/main/music/%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA-%E8%89%BE%E8%BE%B0/src%3Dhttp___inews.gtimg.com_newsapp_bt_0_13290766403_1000.jpg%26refer%3Dhttp___inews.gtimg.webp',
        },
        {
            name: '错位时空',
            artist: '韩可可',
            url: 'https://hub.fastgit.xyz/gfktxdspeach/music_storage/raw/main/music/%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA-%E9%9F%A9%E5%8F%AF%E5%8F%AF/%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA-%E9%9F%A9%E5%8F%AF%E5%8F%AF.mp3',
            cover: 'https://hub.fastgit.xyz/gfktxdspeach/music_storage/raw/main/music/%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA-%E9%9F%A9%E5%8F%AF%E5%8F%AF/u%3D363436123%2C3922921805%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DPNG.webp',
        }
    ]
});

function mus_change(){
    if(document.getElementById('music_self').style.display=="none"){
        document.getElementById('music_li').style.display="none"
        document.getElementById('music_self').style.display="block"
        document.getElementById('mus_heart').style.display="none"
        document.getElementById('mus_heartbeat').style.display="inline"
    }else{
        document.getElementById('music_li').style.display="block"
        document.getElementById('music_self').style.display="none"
        document.getElementById('mus_heartbeat').style.display="none"
        document.getElementById('mus_heart').style.display="inline"
    }
}
