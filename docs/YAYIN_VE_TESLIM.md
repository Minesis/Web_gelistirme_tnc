# Yayın ve teslim

## GitHub
Kendi hesabınızda duygu-atolyesi adlı Public bir repository oluşturun. ZIP'ten çıkan package.json dosyasının bulunduğu klasörü VS Code ile açın. node_modules, .venv ve kişisel günlük yedeklerini eklemeyin.

```sh
git init
git add .
git commit -m "Model destekli duygu günlüğü"
git branch -M main
```
GitHub'ın yeni repo sayfasındaki size ait remote komutunu kullanın, ardından `git push -u origin main` çalıştırın.

## Netlify
Seçenek A: Paketteki dist klasörünü Netlify manuel yayın ekranına yükleyin.
Seçenek B: GitHub reposunu Netlify'a bağlayın. Build command: npm run build. Publish directory: dist. Node: 22. netlify.toml hazırdır.
Model dosyası dist/emotion-model.json içinde bulunmalıdır. Canlı sayfada deneme günlüğü ve aylık filtreyi kontrol edin. Yerel ve canlı adreslerdeki LocalStorage kayıtları ayrıdır.

## Teslim bilgileri
Proje: Duygu Atölyesi — Model Destekli Günlük
Amaç: Günlükleri otomatik sınıflandırmak ve aylık tahmin dağılımını sunmak.
Teknolojiler: React, TypeScript, Vite, Pure CSS, LocalStorage, TF-IDF, Linear SVM.
GitHub public repo: Hesabınızda yayınladıktan sonra bağlantıyı ekleyin.
Herkese açık yayın: Netlify yayınından sonra bağlantıyı ekleyin.
Ekran görüntüsü: docs/gunluk-ekrani.jpg
Özel önizleme: https://duygu-atolyesi-utku.utku-cavdar29.chatgpt.site

Özel önizleme herkese açık teslim bağlantısının yerine geçmez. GitHub hesabına erişim ve resmi teslim formunun bağlantısı sağlanmadığından repo yüklemesi ve form gönderimi tamamlanmadı.
