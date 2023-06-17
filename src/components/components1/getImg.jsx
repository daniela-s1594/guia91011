export function getImageUrl(person,size = "s") {
    return(
        'https://www.bing.com/images/search?view=detailV2&ccid=WbAYmg48&id=0F42A5E1726F06D8053AB37EB6CF0EB3A3201BF6&thid=OIP.WbAYmg48lrjPhGkFqXVjYwHaHa&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.59b0189a0e3c96b8cf846905a9756363%3frik%3d9hsgo7MOz7Z%252bsw%26riu%3dhttp%253a%252f%252ftusimagenesde.com%252fwp-content%252fuploads%252f2018%252f02%252ffotos-de-personas-2.jpg%26ehk%3drlA%252fM9rOkJXcqUDywZbgNR09tII4lX4%252bTxqttzPc4mo%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=400&expw=400&q=personas&simid=608026589156169987&FORM=IRPRST&ck=634FA637846AC853D7B183FE851BA719&selectedIndex=12' +
        person.imageId+
        size+
        '.jpg'
    )
}