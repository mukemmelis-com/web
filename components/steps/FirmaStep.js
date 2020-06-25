import { useEffect, useState } from "react";

export default function ({
  name,
  getName,
  hakkinda,
  getHakkinda,
  tip,
  getTip,
  deneyim,
  getDeneyim,
  sehir,
  getSehir,
  validate,
  web,
  basvuru,
  getBasvuru,
  getWeb
}) {
  return (
    <React.Fragment>
      {validate ? <div className="error_001">Tüm alanları eksiksiz bir şekilde doldurunuz</div> : null}
      <div className="form_group">
        <header>Şirket adı</header>
        <input
          value={name}
          onChange={(text) => getName(text.target.value)}
          placeholder="Apple, Inc - Google, Inc"
        />
      </div>
      <div className="form_group">
        <header>Şirketinz hakkında</header>
        <textarea
          rows="10"
          value={hakkinda}
          onChange={(text) =>
            getHakkinda(text.target.value)
          }
          placeholder="Geleceğe yatırım!"
        ></textarea>
      </div>
      <div className="form_group">
        <header>Çalışma Tipi</header>
        <select
          value={tip || "default"}
          onChange={(text) => getTip(text.target.value)}
        >
          <option value="default">bir tip seçin</option>
          <option value="Uzaktan">Uzaktan</option>
          <option value="Tam zamanlı">Tam zamanlı</option>
          <option value="Yarı zamanlı">Yarı zamanlı</option>
          <option value="Stajyer">Stajyer</option>
        </select>
      </div>
      <div className="form_group">
        <header>Deneyim</header>
        <select
          value={deneyim || "default"}
          onChange={(text) => getDeneyim(text.target.value)}
        >
          <option value="default">bir tip seçin</option>
          <option value="Senior">Senior</option>
          <option value="Junior">Junior</option>
        </select>
      </div>
      <div className="form_group">
        <header>Şehir</header>
        <select
          value={sehir || "default"}
          onChange={(text) => getSehir(text.target.value)}
        >
          <option value="default">bir tip seçin</option>
          <option value="Kocaeli">Kocaeli</option>
          <option value="Ankara">Ankara</option>
        </select>
      </div>
      <div className="form_group">
        <header>Web site</header>
        <input
          value={web}
          onChange={(text) => getWeb(text.target.value)}
          placeholder="https://mukemmelis.com"
        />
      </div>
      <div className="form_group">
        <header>Başvuru adresi</header>
        <input
          value={basvuru}
          onChange={(text) => getBasvuru(text.target.value)}
          placeholder="https://mukemmelis.com/basvuru"
        />
      </div>
    </React.Fragment>
  );
}