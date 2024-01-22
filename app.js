// local reviews data
const reviews = [
  {
    id: 1,
    name: 'jay grey',
    job: 'amoung us player ',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
    text: "I'm a full time gamer. Female hates to cook. kinda short.",
  },
  {
    id: 2,
    name: 'jones johnson',
    job: 'the boss',
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgVFRUYGBgVEhIRERESEhEREhERGBUZGRgUGBgcIS4lHB4rHxgYJzgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISGjQhGiE0NDQ0NDQxNDQ0MTQxNDQ0MTQxMzQ0NDE0NDQ0NDE0NDQxNDQ0NDExNDQ0NDE0MTQ0Mf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EADsQAAIBAgUCBAUBBQcFAQAAAAECAAMRBAUSITFBUSJhcYEGEzKRobEUFULB0SNSYnKCkvAkM6Lh4gf/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB4RAQEBAQADAQEBAQAAAAAAAAABEQISITEDQVEi/9oADAMBAAIRAxEAPwClTS0kKQMmbgta8NYaqHmLeVIlOSJT3jzFpoeYtUhzLEfLQ27THMjVX94cz2pfaUadqaX95SadRwiU7XO80OXvcbTz+pi3qPe+19hNxkSHSLxW4fPsbWPBjROBiUpZq/hMzdChy3nD+Z8QWgsvEpNVsM3jA85qsMNhbtMrg1JebHDMABC0cxaopHum0SlUB4kr8SGgXWp7xcO1jJqnMgqS+esups1axKal2gRqhBtL3zja0iSgztZVufL+c6r+kvLLx9huJlOjTZrhRc9hv7zTtliDao4BBGsLwvZL9Te0izaqiLoo2UCxOnZmIINieTcah7zkt1pPSL4eoaWJYW9doZzTwgEdIHwGZopZRxcON+VZSw/C29oj/NdyVIZDypOkC2xseOhMnrnTl9iVbHeD2mabe8JftKEEXItcXKkL/u4lX5cfMkK6GnBgm9pcSnYScJaP0y0n4VDJ6uD6mQ0WtLLYk2tHgUcQlltBarC2J3EHrTgmoysVEkxSda0CVGTznR7e0WBMth8Pp8TTR5RXB2mWzOsb6R05hT4eY3mdrSNmq3kuoAGQBtohbaLV4C41NTylmi+Ej2hPRd7ytj6F4eScB8mwGtztxtNfQX5ekSjkGH0knuYXrICw8pnet6ac8/8AK4h2jwJAklvNNLFHMDBpXwy9j5S/hlRFV8JbXNFS3Amaw31zSUDsIURfw4llpWw0ssZLVTqpKjiW6ryBt44moUQsQo6kD7y3XzEYdGVAfCD6s9h19WA9m7SOiCpLgX0DVYbkngSgMKajqr8Btb2OxYk7W6gXt63hUhv/AFGKXwK2xvqNwp3B291/M5cpxYPipsdunv19zPUMFTRFAUAWH2k5cQPHk9bJ8Sln+WbWZSB23t9rn7yXD4go39oHFgwKnwrYm5Yn3M9VuDIK2ER+UU+oELTyPLc2zMVFCIAEHCcA+Z8v18pHkmIYsUa1gLpa23+Gan4t+GkdDUprpdAWIUW1p1FhyRyPS3WZbIMONJfVcm4HYDbf8CHN1PUsouwnWnGKJaSIJIyxEEnUAxkp1jtKaDzl/ELYQcDvAqkN4079ImuLeBKrJOj2WdAMhiKVyT5w3lFDTvI/2cde8M4YAATm66b88r4Owjyu05Y5ztDTxTQWMrYupaSg+KR4hLwtOQ3BVWY2UQ9g8Cx3brIfh7CrpJPUw5VqhdhOe9XyyNM9BzppNp15I25JkZE6eayodj5QLeGEMfBnSaSoxDh/rmkw/Ambww8c0NHgR0QSoGTOdpUw7S00lalVG8QCSPFRLn+ccqaix9ZaaJzu13KhywLDwgW9Zn1zJw6Ai12NQgm5sCQLmaXPGRUH+kqD308/beZDE4J6rgghUH11CwFgN2sOSd+bdI/4n+vScDitagjy4l9N+ZiMNnoppow2GqVtAI1/TTLD/EL9R1tK+VfGFaudVV0w1PUafgph6gYcks5ta+3EnmWqvUj0RUHeS6J5dX+NK9Nm0OlQBwumrTCOwOrcFCLcDoeYQw3/AOhIyFmR1IsGCoWVWHI1cd4/Gjyjd1ac85SgKb1UUWC1nsOljY7DpzC6fF5qJrpon1BbVKzIxuLghQh253NuOvMz+OzIo71Hp2DuHY031qtwAD4gptt+Yc83S66mCAEURMHWSogdDcG9jYjg2OxjmQy0/To9Wkaox4EeyFedoyQ4kbQag3MJ1uIOU7mBU1oimOZYtJIBC06StT850CA7EkDuYfOEKIG9IKojdf8AMP1mixj3QD0nF1fcdXM9IqR2EfU4jaI2j6nEehQT6o2tHJ9U6qIrTifLcUV2mhw66hczP5dTBM0NNtrTO/VRBW5jBHON51pvyzoXmEFjiFMxgxDtNYzqHDHxzRUjtM9hlu80NNNoxFrDmXJRo7S4DFVwx0iFbCPLRrGMBOdUvns603ZmQ0w1M09AGjnQ1/F+OIOyPJnauodiygNUdHBNNSSQBYjc8TYVcG2gNSUamb5jvYEjjUt+m23uY53FKqmn6Xpgaj9RIO34kTq7ZT65nqxJisKzLovbawt09ph2+GNVWrSY+IkuitsKlNrMXTzDXU9tu4m+erGPRWoAHCuAbgOobSe4vwY+espXnYxGJ+GlpIXcKFRbl9xYc2A6m8P5H8Nq+AbDuPHVRqhbrTqNutv8vh+xl7GZbRRdbC5Ui2rU4Q3+qxO0jwnxXhlcoHe6kq3zEKi46g23HpKvWlOM9sVgPht6ih0OkkKHs2yshs6lR1uCPKxlzMvh4lbu51EJRpoLWLsxBb2FybdFmtSjTqs9Wg7IHcl9FtLVLC7aWBW/cgX85QxQC4hFZ2c25crtckbAAAcdo51tT1xkEcsyBVQKosoFgBsIVp5Mg6Qjgl8I9JalIDUy5R0gfP8AChFJ7TVQB8T/AEGMtY6sdoMXmFKo8MG35gdOJipK5aPRzAi1GNzOjTedA8UF6esMPUug9oEqbLLWGqEgXnF1HRzRekbCLUO0hpttJW4jwaqU/qja5iBvFEqQsEorkVO9zNAKVoF+HeD6w+Zhd8lz4F19miGLifrMbedXM9MqF5jBQO0K5kIHQbGacpp2BPjmjXgTNYTZpoqb7COiLNCkWNhCtHLHPMk+HqYbczUJTFosF6xmmycgXg6tS0Gxm2qoLTJZzs8eFOtV8PmBRqdIIWNV3TUp0lFVC+57eE+5Eo5vifmFCysg+YUFzciwU6r+t5FXzVMLVpu6sRd91APKFevqIz4jx6VaIek4ZQx7hkvyCOQeu8LPlV5erE1LNgraG3sAQwII09/SGMNiFP0kH0PBM86fFXIs25UrYGwuNxbtuBL2VY91J1XBN7W3tc7WH/OZN5PnpqMz+IkRjSChzupGxue1pma2WPUctemm1lUuFvtwAL23hPD5NRNPxsys12ZtZV2ueplR8Llq+F2e/BK1ah/N/KOYrP8ARrIMx0BcPUAVlU/LII8aje3mdj9pWrOHxIcG4DKgPpz+bynjcDToolak7NpYlNbazbSdr8ybAUynywebrqPdjuT97w5+6nr/AB6Ngj4R6SxK+B+geksTRgWAvidf7Mw7AvxEt0b0jDFN9MFHYmGWQ2gmoNzDTMadSiMItMQCdvSdF9p0Rg1dvDH4RtoyohI2lnB4Y237TnsayiFHgSVjtG0k2iVHAhg1TB8Uc8kGgG8e1VPKGFOl3IXtf1hx60zWHxgSJWza5keG1XlJBmo92vEAg/DYnVLyAkTSTC3UGJRTzB+hBJMej9IMbDVDNJYi6toV1C1oXoKLQHhsI4O5hfDgjaF9nz6+tT8O8e8068TKZA9ue80y1haKJ6+pKvEyGdfWJpq+JFpj87xiAklwCAbbg2PT8yvpT0yPxnW+hOgGo97nb9BMWcS9IkaiQdtXcdiOsvZlWcMeGHOlj+h5EFtWRzbdT1V9x95tJkxn11t1KuNZDfkHcHoDDGCzhQBq8R53NvF3uN5nHpleNx1HIkF7cfaReZRO7HplHM6bKA+7FALi+lAe3nLX7owLp8zdTcbBzz6X/wCGeZ4fGMLd/M2hrJ6dbEOKYYLcFvGxUMBYk2HJ8pHjjWfpv2NarLUdKSX0ozORz4V4v6nTf3hlKJBB7ESDJcnGHBJOp2trc7bDgAdBCbJ5iEmHbrSYDEjSPSWGxajrMsrsNg0Y9zyx/SUmxpnzBR1gvMMYtQWvBZA6/kzvmAdBAiOigQLWRdRl/G4rsYEq1jfmPCtWTSWIKaiVkr+ca1eGDVradKnz50StDv2uOGLPAnUsCJbpUEExq5D6GM7yHMMR1EF5jV0t4e8rviSRDEXr+CKOz8SwuGfqZTy3Eb794UxOLAHtCnOpilVBHWV0YaveJia95Sp1PGPWEiL17bLApsLQ1hqcA5PVBG81mGUWibc30q16YtxKjIO0JYi0oO4EqQWoGUSzh6Y7SJawki4sDqJWJ1fpXXcCTvjHttYe8F1cxVVve/QAckwBj81eodOrSOyh2A8rgfV5niVzzqb1g5mOd6brrux6LuR/SZHHMz33ABN7Dcn1MU00vbWtz0JszH35levSt1/Wa88yM7dCMSO/3g3EUb8j+o9IbrC8H1Kfb7f0jILKkdd+h6HyMYd+RYy06X4+x5EgZb7HkREj0zUfB2CYutYtpRC3J3ZtNtIHbfmZyhTLsFG5JCgHm5mww1NqKBAb2vva3JvxI6uK552tcMyQfxSOrnSDi5mSaq8jbW0jY2ytSc/XoDGvn9xsPuZm1wzHrHHDN5w2F40XqZw56gRjZkx/ig+nhLyZcETwIeReFOq4u/UytVr36yWth7CQhJUosRCsR1jTiTfmc6RgpXj1OJP2gmdJ1oCdErxGkoQNmLtTPlCP7yUQbmtdXH8png6+AdavqaKZXUeKTFoMz6NUgyzVxBIlJBvH1HgEj1NpBTfeJqvOUQgHsBjNNvWbXAZgCvPSeXrVIMKYbGtawvCxfPTeYnHL3/MB4/HDoftA2pz0jfluTxCNFha7ubKxlsYBti7EC4ubm/oPOWspwwXcidmmI1NoXt06L39T+gl8zU9elWrX6KNgLc3A8r9ZXqOB9R/0iK7W8I9z28hB+IqD18z3mzImJqhuRt58GVWqsvBuP7jHb2PSMd7yFni0LPzARcdeQeR6yGpIVffmShoEgqID/UStUp/+iP5iXHEhMAlyCmHxFMWudf6A7z0D93Ajiee4aoabq67FWDD1BnquFxC1EV14dQw9xxMf0jb8flgK2BA6Tv2QdoVrJGIkzbwOXDjtEbC3hF0i/Ki0WKVPCiWUoASRRaI7x6WBuY0wBxA6wrmNS4gemSZc+Mr9JUtEpARHEdSpygnnSKx7xYgorhWkOJQrzDaOpgvNXkF1PQUBvHSMtJEaNkW8614pjUa0AcqSQLGB94/mB4bouYfyrB7CDMDRuwvNZhqOleIrV8cpFwqxBhxJNdtzB2Lx9uIo1txdxNcU0J24Nrmwv5ntApxQ0kqdju9RhY1G7jsPKVcwxWtgHPgUKzgHdz/Cnvv9pRrO1TxP4UH0Uxtt0m/MyMOutqTE46+y8frKL4oxtR78SAytSnFYGNYys0clS8CPJkqPIGacj/rALRMiaKGiGAIJr/hfMf7P5Z/gJK/5WN/1vMfCOR1AKyAmwY6PvsPzaT1NiuOs6b75mqdeV0Qgxxa0567JP6mUW3itWlWpWkQMnLVeUi0rFjHMshomJXc8Skq2OtpMFUnAvLuJpnTA5pmXGV3U7OCYhe0j0bRl44XtJrM6M1xIyD8FijfmXcempbyhgKYvLWLqWFpNRvoJYbyVRGNHKY0lJkZkhMbqEQKkuYNQTvKoEVXKnaAaDAoNYmvp0xpmGypyzibWg/hkdN+PavjE2mZxq+KajFP4YAqYR6rWRbx80+p6DyioS72sP+2h/iOlbv6C1vvBuJxGs3Jv+gHa0u5wlnsT9Pg52FtrQQ4Am8+OauZpHrEaxjDKB5kTm2/nFMa/ECPapt7xBU7dTtK1RuPvH0Tfc8Dr3gF+mLDcxwMq/MLGTrGDjHU3III5FiD5jrG3nRB6Xg6oqIj/AN9Q3vbcfe8dXUQR8JV9dAr1R2H+lvEPyTCDVDec3cyu3jreYY1OSJSvG1KwEfQe4iVZNSoANo2oo5tEXnmLU36xYNxTxTi3EDu3lNP+6S633g6pkhBlcxn11AYjaVqiw5Uyo2tIjlDS5EXqAOoxYb/c86UnWao02BvJMaCRxLquAJFWcMJnrMLWmTJEpywlM82j/aUSr+zxVw0sbzrmIFp0hEajHoscSIBYyohWmrFXw+0xlBrOJpqD3WTY046sPxFW4hPIHVKTuf4FdvsCRM9ialhLC4rRg6m/1Mqfc3P4Bj55Veqy+Pq6mJPJJN/1g1jJsQ9yZXJmzEwxjR7Rl5QIJG52kkr12tAkRYX4v+klVj1H24jBboYujz/MCWUb/l5IrymFAkqNGFxWikyFWj2MDab4Nr2d0/vIG91P/wBTUViAJhvhupauvmHB/wBpP8prHr32mHc9uj8r6RVH3l3DVdtoPq8SbBVQO0nGm+1hw1+ZdyyhqYM0E4jMN+kJZVidQjnKeuo0bVVVZQfECQ1nNoKqVNzHIytE2riQVcUIONSQO8otE/2gToM+ZOjLWY+dcREcTp0hMTpUHEjuIs6CjxaLtOnQB4AleuJ06BUmDW7i/eb/AC/LwyD0nToqfKLF5UADaZ3Om+VSVO9RmNuwFv5zp0fP0Vkata52EZ8ydOmiSaxGNOnQBrmQFrnedOlE5qfaR7jmdOgRwPlHq0SdGEyNJSYs6Br/AMP7118g5/8AEj+c1mHUs0WdM+vrXj4LPQAXcCAMfXC7KIs6RPrTr4FPUPJmm+GW12ESdNL8Yz61T4QEShUylSbxZ0haP90qIz93LOnRjIX93LOnToxj/9k=',
    text: 'He takes everything serious and gets angry easily',
  },
  {
    id: 3,
    name: 'peter parker ',
    job: 'sus intern',
    img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202309/elon-musk-252648408-16x9.jpg?VersionId=9KYZpqpoY3WvH8eVZg54mmkpTGfvPCWj&size=690:388',
    text: 'bro leaves randomly and no explaination.',
  },
  {
    id: 4,
    name: 'walter white',
    job: 'old chemistry teacher ',
    img: 'https://preview.redd.it/what-if-walter-white-was-black-v0-ka2o0unfsoua1.jpg?width=640&crop=smart&auto=webp&s=b58359f7c2345092765ad8e181d31bf2d4d8528d',
    text: ' hard working guy. ',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});











startbtn.addEventListener('click', function () {
  currentItem = 0;
  showPerson();
});
 
endbtn.addEventListener('click', function () {
  currentItem = reviews.length - 1;
  showPerson();
});









const startBtn = document.querySelector('.start-btn');
const endBtn = document.querySelector('.end-btn');
const startFunction = function () {
 currentItem = 0;
 showPerson();
};
const endFunction = function () {
 currentItem = reviews.length - 1;
 showPerson();
};
startBtn.addEventListener('click', startFunction);
endBtn.addEventListener('click', endFunction);
