let keyword;

$(document).ready(function () {
    $(".search").click(function () {
        var search_key = document.getElementById('search_value').value;
        keyword += search_key;
        getNews();
        $(".top").show(5000)
    })
    $('.genre').click(function () {
        $('nav').show()
        $('.genre').hide(500)
    })
    $('.top-news').click(function () {
        keyword = '';
        keyword += 'breaking news';
        getNews();
        keyword = '';
        $(".top").show(5000)
    })
    $('.tech').click(function () {
        keyword = '';
        keyword += 'tech';
        getNews();
        $(".top").show(5000)
    })
    $('.india').click(function () {
        keyword = '';
        keyword += 'india';
        getNews();
        $(".top").show(5000)
    })
    $('.elon').click(function () {
        keyword = '';
        keyword += 'elonmusk';
        getNews();
        keyword = '';
        $(".top").show(5000)
    })
    $('.programming').click(function () {
        keyword = '';
        keyword += 'programming';
        getNews();
        $(".top").show(5000)
    })
    $('.memes').click(function () {
        keyword = '';
        keyword += 'memes';
        getNews();
        $(".top").show(5000)
    })
    $('.dog').click(function () {
        keyword = '';
        keyword += 'dogs';
        getNews();
        $(".top").show(5000)
    })
})

const getNews = async () => {
    fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=988f0cfb250a4bd691f8044d0d72db59`)

        .then(e => e.json()).then(response => {
            for (var i = 0; i < response.articles.length; i++) {
                document.querySelector(".outer").innerHTML +=
                    '<img src=' + response.articles[i].urlToImage + ' />' +
                    '<h1>' + response.articles[i].title + '</h1>' + "<a href=" + response.articles[i].url + " target='_blank'>read full news here: " + '<b>' + response.articles[i].source.name + ' </b>' + '</a>' + '<p>' + response.articles[i].description + '</p>' + '<hr>'
            }
        })
}

// particlesJS.load('particles-js', 'particles.json', function () {
//     console.log('callback - particles.js config loaded');
// });