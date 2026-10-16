# Web geliştirme yönergesi kontrolü

| İstenen | Karşılık | Durum |
|---|---|---|
| Modern JS kütüphanesi | React | Tamam |
| Kurulum / IDE | package.json, lockfile, VS Code adımları | Hazır |
| Components, Pages, Interfaces | Üç klasör de mevcut | Tamam |
| CSS seçimi | Pure CSS | Tamam |
| Ekle | Tarihli günlük ve model tahmini | Tamam |
| Listele | Aylık liste, arama ve filtre | Tamam |
| Güncelle | Metin/tarih düzenleme ve yeniden tahmin | Tamam |
| Sil | Onaylı silme ve grafik güncelleme | Tamam |
| Ekran görüntüsü | docs/gunluk-ekrani.jpg | Pakete eklendi |
| Public GitHub repo | Kullanıcı hesabı gerekir | Hesapta tamamlanacak |
| Teslim formunda linkler | Resmi form paylaşılmadı | Tamamlanacak |
| Netlify/eşdeğer yayın | dist ve netlify.toml hazır; özel önizleme var | Herkese açık yayın tamamlanacak |

## Kontroller
Python ve JavaScript: 96 girdide aynı sınıf; karar puanı farkı <1e-9.
Ay sınırları, boş ay, manuel kayıtların hariç tutulması, güncelleme, silme ve geçersiz tarihler otomatik olarak kontrol edilir.
Tarayıcıda gerçek model yüklemesi, günlük ekleme, tarih değişimi ve aylık yüzdeler kontrol edildi.
TypeScript kontrolü ve üretim derlemesi başarılı. Tarayıcıda metin güncellemesinin yeni tahmin üretmesi, silmenin yüzdeleri değiştirmesi ve yenileme sonrası kalıcılık doğrulandı. Ekran görüntüsündeki metinler test için yazılan örneklerdir.

Kaynak CSV sağlanmadığından eğitim tekrarlanmadı. Sunulan notebook çalıştırılacaksa CSV'nin notebook'ta belirtilen Drive konumuna konması gerekir.
