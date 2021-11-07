# ZabbixMC Frontend
Vue.js and TypeScript were used for development.

### Compiles and hot-reloads for development
```
docker-compose -f docker-compose.local.yml up -d
```

### Compiles and minifies for production
```
docker build -t ${EXTERNAL_IMAGE_TAG} -f docker/app/Dockerfile.prod .
docker-compose up -d
```
## Credits
Design takes from [jesuscraft.ru](https://jesuscraft.ru).

### Fonts
* [FontAwesome](https://fontawesome.com/)
* [Acrom](https://fontsfree.pro/base-web-fonts/sans-serif-grotesque/34-acrom.html)
* [Gilroy](https://www.fontshmonts.com/text-fonts/gilroy/)
* [ProximaNovaBlack](https://fontsfree.net/proxima-nova-black-font-download.html)


## Donations
* [Ko-fi.com](https://ko-fi.com/loper)
* Bitcoin: bc1q4jz44s3e2044j67w3tm5au5e9ys2tyswrem6c2
* Ethereum: 0xB193D7CE6dC54324424F62B8cb34514f3c716Ef4
