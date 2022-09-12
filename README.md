# NFT-Tutorial

NFT 스터디 1기에서 진행하는 튜토리얼 입니다.

### 0. 환경 설정
- .env 파일에 해당 값 입력
```
RINKEBY_URL=https://rinkeby.infura.io/v3/...
PRIVATE_KEY=
NFT_STORAGE_KEY=
```

### 1. nft.storage를 통해서 사진 이미지를 업로드하고
```

$ node scripts/1_upload_img_ipfs.js ./img/elon.PNG elon 'elon image'
Token {
  ipnft: 'bafyreibulpo7awvhokoa2tjzsloxz6sfhftp5nk7zes26tkk5ns7a5pjqq',
  url: 'ipfs://bafyreibulpo7awvhokoa2tjzsloxz6sfhftp5nk7zes26tkk5ns7a5pjqq/metadata.json'
}

$ node scripts/1_upload_img_ipfs.js ./img/elon2.PNG elon2 'elon sign image'
Token {
  ipnft: 'bafyreibutlf24m4s6wx3szvjgixhrdvxbw6wu5hvpvxkg6cp4nfg5amjkm',
  url: 'ipfs://bafyreibutlf24m4s6wx3szvjgixhrdvxbw6wu5hvpvxkg6cp4nfg5amjkm/metadata.json'
}
```
- node 호출시 package.json의 type이 module 형식이여야함

### 2. 해당 사진을 nft로 토큰화하고
```
$ npx hardhat --network goerli run scripts/2_deploy.js
```

아래 과거 rinkeby에서 배포한 것
- Contract Address : 0xacADF1f8d6d2693a6B2EE3fcdF176268FaB1289c
- https://rinkeby.etherscan.io/address/0xacADF1f8d6d2693a6B2EE3fcdF176268FaB1289c
- npx hardhat script 호출시 package.json의 type이 commonjs 형식이여야함

### 3. 모바일 Metamask 지갑앱에서 등록한 이미지를 보는 것을 진행합니다.
- Metamask 앱에서 Nft 불러오기: 주소와 TokenId 입력

