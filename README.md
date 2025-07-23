# ReactCDN

## 参考
[React.jsをCDNで使う](https://zenn.dev/souq/articles/00e843027e59a1)

## ✅ ポイント
- JSXファイルは .jsx 拡張子で保存し、type="text/babel" で読み込む。
- ローカルで動かす場合は http-server や live-server などのローカルサーバーが必要。
- CDN構成では react-virtuoso は使えないため、スクロールイベントを使った手動実装が必要。
