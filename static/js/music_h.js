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
            url: 'https://www.ytmp3.cn/down/74706.mp3',
            cover: 'https://img0.baidu.com/it/u=53043569,1589246528&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
        },
        {
            name: '错位时空',
            artist: '韩可可',
            url: 'https://webfs.cloud.kugou.com/202204301840/2ebe95ab489f4449e48d2a2b3d740bd1/part/0/960547/KGTX/CLTX001/1d378da2268cf5f45b7ec029620489af.mp3',
            cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F19844ff6f7eeac4c384f4146caa93719c6d284c3.png&refer=http%3A%2F%2Fi1.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653907338&t=37f3bc595a835692510260875aad1924',
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
